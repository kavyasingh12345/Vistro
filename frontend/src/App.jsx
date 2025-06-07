/*import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Auth/Navigation";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;*/
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Auth/Navigation";
import { FaPlay } from "react-icons/fa";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3 px-10 bg-gradient-to-br from-black via-gray-900 to-teal-900 min-h-screen text-white font-sans">
        {/* Vistro Heading with Play Button */}
        <div className="flex items-center gap-4 mb-8">
          <h1
            className="text-5xl font-extrabold tracking-wide drop-shadow-md bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            Vistro
          </h1>
          <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition duration-300 shadow-lg hover:scale-110">
            <FaPlay className="text-lg" />
          </button>
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default App;
