import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../backend/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.validation) {
          login(res.data.user);
          if (res.data.user.functie === "admin") {
            navigate("/admin");
            console.log("admin");
          } else {
            navigate("/");
          }
        } else {
          alert("Your password is not correct. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section className="max-w-6xl mx-auto min-h-screen">
      <div className="flex justify-center mt-[15vh] items-center">
        <div className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg border-2 bg-background border-gray-300">
          <h1 className="text-2xl font-bold  text-center text-mainDark">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Gebruikersnaam
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Wachtwoord
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <p>
              Geen account? Registreer{" "}
              <span className="text-mainBlue underline">
                <Link to="/register">hier</Link>
              </span>
            </p>
            <button
              type="submit"
              className="w-full border-2 rounded-xl font-bold duration-200 px-4 py-2 border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
