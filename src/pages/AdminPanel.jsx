import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminCard from "../components/AdminCards";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [softwares, setSoftwares] = useState(products);
  const [notification, setNotification] = useState(null);
  const [newSoftware, setNewSoftware] = useState({
    title: "",
    description: "",
    image: "",
    price: {
      dayprice: 0,
      weekprice: 0,
      monthprice: 0,
      lifetimeprice: 0,
    },
  });

  useEffect(() => {
    fetch("https://zenno-database-production.up.railway.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/products/${id}`
      );
      if (response.status === 200) {
        setNotification("Product succesvol verwijderd!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setProducts(products.filter((product) => product.id !== id));
      } else {
        console.error("Error deleting product:", response.data);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/addproduct",
        newSoftware
      );
      if (response.status === 200) {
        const updatedProductsResponse = await axios.get(
          "http://localhost:3001/products"
        );
        const updatedProducts = updatedProductsResponse.data;

        setProducts(updatedProducts);

        setNotification("Product successfully added!");

        setNewSoftware({
          title: "",
          description: "",
          image: "",
          price: {
            day: 0,
            week: 0,
            month: 0,
            lifetime: 0,
          },
        });
      } else {
        console.error("Error adding product:", response.data);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEdit = async (id, updatedSoftware) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/products/${id}`,
        updatedSoftware
      );

      if (response.status === 200) {
        const updatedProductsResponse = await axios.get(
          "http://localhost:3001/products"
        );
        const updatedProducts = updatedProductsResponse.data;

        setProducts(updatedProducts);

        setNotification("Product successfully edited!");
      } else {
        console.error("Error editing product:", response.data);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
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
      {notification && <div className="notification">{notification}</div>}
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
        {products.map((software) => (
          <AdminCard
            key={software.id}
            software={software}
            onDelete={() => handleDelete(software.id)}
            onEdit={(updatedSoftware) =>
              handleEdit(software.id, updatedSoftware)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
