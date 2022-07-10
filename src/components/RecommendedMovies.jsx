import React, { useEffect, useState } from "react";
import RecommendedMovieCard from "./RecommendedMovieCard";

let url =
  "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f0c3d83fd94b41bcb736ae2478e35567";
const RecommendedMovies = ({ searchFilter }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovieList(data.results);
      });
  }, []);

  let searchData = movieList.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchFilter.toString().toLowerCase())
    );
  });
  return (
    <div className='recommendedMovieContainer'>
      <h2 className='recommendedMovieHeading'>Recommended Movie</h2>
      <div className='recommendedMovieContent'>
        {searchData.map((movie, index) => (
          <RecommendedMovieCard key={index} movieInfo={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
