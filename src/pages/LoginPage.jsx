import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login aa", username, password);
  };

  return (
    <section className=" max-w-6xl mx-auto min-h-screen px-4 py-8 ">
      <Navbar />
      <div className="flex justify-center mt-[15vh] items-center">
        <div className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg border-2 bg-background border-gray-300">
          <h1 className="text-2xl font-bold  text-center text-mainDark">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700 "
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full  p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-2 border  border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="border-2 rounded-xl font-bold duration-200 px-4 py-2 border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80"
            >
              Log in
            </button>
            {/* <Button label="Login" primary={true} /> */}
            {/* TODO fix onlick in Button component */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
