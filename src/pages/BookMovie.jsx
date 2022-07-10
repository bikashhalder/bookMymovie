import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import BookMovieDetails from "../components/BookMovieDetails";
let url =
  "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f0c3d83fd94b41bcb736ae2478e35567";
const BookMovie = () => {
  const { id } = useParams();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    <div className='bookMovieContainer'>
      <Navbar />
      {movieList.map((movie) => {
        if (String(movie.id) === id) {
          return <BookMovieDetails key={movie.id} movie={movie} />;
        }
        return null;
      })}

      <Footer />
    </div>
  );
};

export default BookMovie;
