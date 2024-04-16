import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    console.log("Register attempt", username, password);
  };

  return (
    <section className="max-w-6xl mx-auto min-h-screen">
      <div className="flex justify-center mt-[15vh] items-center">
        <div className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg border-2 bg-background border-gray-300">
          <h1 className="text-2xl font-bold text-center text-mainDark">
            Register
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
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Herhaal wachtwoord
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <p>
              Al een account? Login{" "}
              <span className="text-mainBlue underline">
                <Link to="/log-in">hier</Link>
              </span>
            </p>
            <button
              type="submit"
              className="border-2 rounded-xl font-bold duration-200 px-4 py-2 border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
