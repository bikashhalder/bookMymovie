import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
let url =
  "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f0c3d83fd94b41bcb736ae2478e35567";
const AboutMovie = () => {
  const [movieList, setMovieList] = useState([]);
  let { id } = useParams();
  console.log("movie list", movieList);
  console.log("id", id);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovieList(data.results);
      });
  }, []);
  return (
    <div className='aboutMovieContainer'>
      <Navbar />
      {movieList.map((movie) => {
        if (String(movie.id) === id) {
          return <MovieDetails movie={movie} key={movie.id} />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
};

export default AboutMovie;
