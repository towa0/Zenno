import React, { useState } from "react";
import { SoftwareData } from "../constants/index";
import AdminCard from "../components/AdminCards";

const AdminPanel = () => {
  const [softwares, setSoftwares] = useState(SoftwareData);
  const [newSoftware, setNewSoftware] = useState({
    title: "",
    description: "",
    image: "",
    price: { day: "", week: "", month: "", lifetime: "" },
  });

  const handleDelete = (id) => {
    setSoftwares(softwares.filter((software) => software.id !== id));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const newId = softwares.length
      ? Math.max(...softwares.map((s) => s.id)) + 1
      : 1;
    const softwareToAdd = { ...newSoftware, id: newId };
    setSoftwares([...softwares, softwareToAdd]);
    setNewSoftware({
      title: "",
      description: "",
      image: "",
      price: { day: "", week: "", month: "", lifetime: "" },
    });
  };

  const handleEdit = (id, updatedSoftware) => {
    const updatedSoftwares = softwares.map((software) =>
      software.id === id ? { ...software, ...updatedSoftware } : software
    );
    setSoftwares(updatedSoftwares);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("price")) {
      const priceKey = name.split(".")[1];
      setNewSoftware((prev) => ({
        ...prev,
        price: { ...prev.price, [priceKey]: value },
      }));
    } else {
      setNewSoftware((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-6xl min-h-screen mx-auto px-4 py-8">
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold text-mainDark mb-4">
          Voeg software toe
        </h1>
        <form onSubmit={handleAdd} className="space-y-4">
          <input
            type="text"
            name="title"
            value={newSoftware.title}
            onChange={handleChange}
            placeholder="Titel"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            name="description"
            value={newSoftware.description}
            onChange={handleChange}
            placeholder="Beschrijving"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            value={newSoftware.image}
            onChange={handleChange}
            placeholder="Afbeeldings-URL"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(newSoftware.price).map((key) => (
              <input
                key={key}
                type="number"
                name={`price.${key}`}
                value={newSoftware.price[key]}
                onChange={handleChange}
                placeholder={`Prijs per ${key}`}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            ))}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toevoegen
          </button>
        </form>
      </div>
      <div className="flex overflow-x-auto py-4">
        {softwares.map((software) => (
          <AdminCard
            key={software.id}
            software={software}
            onDelete={() => handleDelete(software.id)}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
