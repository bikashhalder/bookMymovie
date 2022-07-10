import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecommendedMovies from "../components/RecommendedMovies";
import Footer from "../components/Footer";
const Home = () => {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <RecommendedMovies searchFilter={searchFilter} />
      <Footer />
    </div>
  );
};

export default Home;
