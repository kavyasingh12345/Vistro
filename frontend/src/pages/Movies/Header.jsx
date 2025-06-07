/*import React from "react";
import SliderUtil from "../../component/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex flex-col mt-[2rem] ml-[2rem] md:flex-row justify-between items-center md:items-start">
      <nav className="w-full md:w-[10rem] ml-0 md:ml-2 mb-4 md:mb-0">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
        >
          Browse Movies
        </Link>
      </nav>

      <div className="w-full md:w-[80%] mr-0 md:mr-2">
        <SliderUtil data={data} />
      </div>
    </div>
  );
};

export default Header;*/
import React from "react";
import SliderUtil from "../../component/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-8 mt-6 md:mt-10">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-[12rem] space-y-3 mb-6 md:mb-0">
        <Link
          to="/"
          className="block px-4 py-2 rounded-xl text-white bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-300 transition duration-300 shadow-md hover:shadow-lg text-center"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="block px-4 py-2 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-500 hover:to-indigo-300 transition duration-300 shadow-md hover:shadow-lg text-center"
        >
          Browse Movies
        </Link>
      </nav>

      {/* Movie Slider */}
      <div className="w-full md:w-[80%]">
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-900 p-2 md:p-4">
          <SliderUtil data={data} />
        </div>
      </div>
    </div>
  );
};

export default Header;
