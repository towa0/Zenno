import React, { useState } from "react";
import Button from "./Button";

const AdminCard = ({ software, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...software });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setEditData({ ...software }); 
    }
  };

  return (
    <div className="bg-background/30 min-w-[30vh] gap-6 backdrop-blur-md flex flex-col justify-between p-6 cursor-pointer hover:shadow-xl rounded-xl border-2 border-gray-300 shadow-lg transition-shadow duration-300 ease-in-out">
      <div>
        {isEditing ? (
          <>
            <input
              className="text-lg font-bold text-mainDark text-center "
              value={editData.title}
              onChange={handleEditChange}
              name="title"
            />
            <textarea
              className="text-md leading-tight text-gray-700"
              value={editData.description}
              onChange={handleEditChange}
              name="description"
            />
            <input
              className="w-[15vh] h-[15vh] object-cover mb-4 mx-auto"
              value={editData.image}
              onChange={handleEditChange}
              name="image"
            />
            {Object.keys(software.price).map((key) => (
              <input
                key={key}
                className="flex justify-between items-center py-1"
                value={editData.price[key]}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    price: { ...editData.price, [key]: e.target.value },
                  })
                }
                name={`price.${key}`}
              />
            ))}
            <Button label="Save" onClick={handleSave} />
            <Button label="Cancel" onClick={toggleEdit} />
          </>
        ) : (
          <>
            <h1 className="text-lg font-bold text-mainDark text-center">
              {software.title}
            </h1>
            <img
              src={software.image}
              alt={software.title}
              className="w-[15vh] h-[15vh] object-cover mb-4 mx-auto"
            />
            <p className="text-md leading-tight text-gray-700">
              {software.description}
            </p>
            <ul className="mt-4">
              {Object.entries(software.price).map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between items-center py-1"
                >
                  <span className="text-sm font-medium text-mainDark">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  </span>
                  <span className="text-sm font-bold text-mainBlue">
                    {`€${value},-`}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 hover:bg-red-500/70 text-white font-bold duration-200 px-4 py-2 rounded-lg"
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              className="bg-mainBlue text-white hover:bg-mainBlue/80 rounded-xl font-bold duration-200 px-4 py-2"
              onClick={toggleEdit}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminCard;
