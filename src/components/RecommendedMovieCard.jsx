import React from "react";
import { useNavigate } from "react-router-dom";
const RecommendedMovieCard = (movie) => {
  let navigate = useNavigate();
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const info = movie.movieInfo;
  const handleMovie = (id) => {
    navigate(`/aboutMovie/${id}`, { replace: true });
  };

  return (
    <div className='movieCardContainer'>
      <div className='movieCardContent'>
        <div className='movieCardImages'>
          <img
            className='movieCardImage'
            src={imageUrl + info.poster_path}
            alt='poster'
            onClick={() => handleMovie(info.id)}
          />
        </div>
        <div className='movieCardRating'>{info.vote_count} liked it</div>
        <div className='movieName'>{info.title}</div>
      </div>
    </div>
  );
};

export default RecommendedMovieCard;
