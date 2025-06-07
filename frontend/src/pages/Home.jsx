/*import React from "react";
import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <>
      <Header />

      <section className="mt-[10rem]">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;*/


import React from "react";
import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <div className="min-h-screen text-white font-sans bg-gradient-to-br from-black via-gray-900 to-teal-900">
      <Header />

      <section className="mt-[8rem] px-10">
        {/* Movies Grid */}
        <MoviesContainerPage />
      </section>
    </div>
  );
};

export default Home;
