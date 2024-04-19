import React, { useState } from "react";

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

  const handleSave = async () => {
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
            <ul className="mt-4">
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">Day:</span>
                <input
                  className="text-lg font-bold text-mainBlue"
                  value={editData.dayprice}
                  onChange={handleEditChange}
                  name="dayprice"
                  type="number"
                />
                <span className="text-lg font-bold text-mainBlue">,-</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">Week:</span>
                <input
                  className="text-lg font-bold text-mainBlue"
                  value={editData.weekprice}
                  onChange={handleEditChange}
                  name="weekprice"
                  type="number"
                />
                <span className="text-lg font-bold text-mainBlue">,-</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">
                  Month:
                </span>
                <input
                  className="text-lg font-bold text-mainBlue"
                  value={editData.monthprice}
                  onChange={handleEditChange}
                  name="monthprice"
                  type="number"
                />
                <span className="text-lg font-bold text-mainBlue">,-</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">
                  Lifetime:
                </span>
                <input
                  className="text-lg font-bold text-mainBlue"
                  value={editData.lifetimeprice}
                  onChange={handleEditChange}
                  name="lifetimeprice"
                  type="number"
                />
                <span className="text-lg font-bold text-mainBlue">,-</span>
              </li>
            </ul>
            <button
              onClick={handleSave}
              className="text-mainBlue border-mainBlue hover:bg-mainBlue hover:text-white border-2 rounded-xl font-bold duration-200 px-4 py-2 "
            >
              Save
            </button>
            <button
              onClick={toggleEdit}
              className="text-mainBlue border-mainBlue hover:bg-mainBlue hover:text-white border-2 rounded-xl font-bold duration-200 px-4 py-2 "
            >
              Cancel
            </button>
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
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">Day:</span>
                <span className="text-lg font-bold text-mainBlue">
                  {`€${software.dayprice},-`}
                </span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">Week:</span>
                <span className="text-lg font-bold text-mainBlue">
                  {`€${software.weekprice},-`}
                </span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">
                  Month:
                </span>
                <span className="text-lg font-bold text-mainBlue">
                  {`€${software.monthprice},-`}
                </span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-md font-medium text-mainDark">
                  Lifetime:
                </span>
                <span className="text-lg font-bold text-mainBlue">
                  {`€${software.lifetimeprice},-`}
                </span>
              </li>
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
