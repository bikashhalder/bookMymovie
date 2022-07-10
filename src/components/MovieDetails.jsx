import React from "react";
import { FaShare, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const MovieDetails = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();
  const handleBookTicket = (id) => {
    navigate(`/bookmovie/${id}`, { replace: true });
  };
  return (
    <div className='movieDetailsContainer'>
      <div className='movieDetailsTop'>
        <div className='movieDetailsLeft'>
          <div className='movieCardImages'>
            <img
              className='movieCardImage'
              src={imageUrl + movie.poster_path}
              alt='movie Card'
            />
          </div>
          <div className='movieDetailsLeftInfo'>
            <div className='movieDetailsTitle'>
              <h2>{movie.title}</h2>
            </div>
            <div className='movieDetailsRating'>
              <h4>
                <span style={{ color: "brown" }}>{movie.vote_count}</span> Liked
                This movie
              </h4>
            </div>
            <FaStar style={{ color: "yellowgreen" }} />
            <FaStar style={{ color: "yellowgreen" }} />
            <FaStar style={{ color: "yellowgreen" }} />
            <FaStar /> <FaStar />
            <div className='movieDetailsUserRating'>
              <h5>
                Add Your review <button disabled>Review</button>
              </h5>
            </div>
            <div className='movieDetailsLanguage'>
              {movie.original_language === "en"
                ? "English"
                : movie.original_language}
            </div>
            <div className='movieDetailsDuration'>2h 35min</div>
            <div className='movieDetailsBookTicket'>
              <button
                className='bookTicket'
                onClick={() => handleBookTicket(movie.id)}>
                Book Ticket
              </button>
            </div>
          </div>
        </div>
        <div className='movieDetailsRight'>
          <div className='movieDetailsBackdropImages'>
            <img
              className='movieDetailsBackdropImage'
              src={imageUrl + movie.backdrop_path}
              alt=''
            />
          </div>
          <div className='movieDetailsShare'>
            <button
              style={{
                border: "none",
                backgroundColor: "black",
                color: "white",
                fontSize: "20px",
              }}>
              <FaShare />
            </button>
          </div>
        </div>
      </div>
      <div className='movieDetailsBottom'>
        <h1>About the movie</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
