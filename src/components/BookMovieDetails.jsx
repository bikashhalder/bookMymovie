import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const BookMovieDetails = ({ movie }) => {
  const date = new Date();
  const morning = "12:00";
  const afternoon = "2:00";
  const evening = "4:00";
  const night = "7:00";
  const navigate = useNavigate();
  const handleOnTimeButtonMorning = (id) => {
    navigate(`/selectingSeat/${id}/${morning}`, { replace: true });
  };
  const handleOnTimeButtonAfterNoon = (id) => {
    navigate(`/selectingSeat/${id}/${afternoon}`, { replace: true });
  };
  const handleOnTimeButtonEvening = (id) => {
    navigate(`/selectingSeat/${id}/${evening}`, { replace: true });
  };
  const handleOnTimeButtonNight = (id) => {
    navigate(`/selectingSeat/${id}/${night}`, { replace: true });
  };
  const releaseDate = moment(movie.release_date).format("D MMM YYYY");
  const day = moment(date.getDay()).format("ddd");
  const day2 = moment(date.getDay()).add(1, "day").format("ddd");
  const day3 = moment(date.getDay()).add(2, "day").format("ddd");

  // main function
  return (
    <div className='bookMovieContent'>
      <div className='bookMovieDetails'>
        <div className='bookMovieTitle'>{movie.title}</div>
        <div className='bookMovieReleaseDate'>
          {releaseDate}
          <div style={{ margin: "0px 20px" }}>2 hrs 26 mins</div>
        </div>
      </div>
      <div className='bookMovieDateAndFilter'>
        <div className='bookMovieDate'>
          <div className='bookMovieDateOne'>
            <div className='bookMovieDisplayDate'>{date.getDate()}</div>
            <div className='bookMovieDisplayDay'>{day}</div>
          </div>
          <div className='bookMovieDateTwo'>
            <div className='bookMovieDisplayDate'>{date.getDate() + 1}</div>
            <div className='bookMovieDisplayDay'>{day2}</div>
          </div>
          <div className='bookMovieDateThree'>
            <div className='bookMovieDisplayDate'>{date.getDate() + 2}</div>
            <div className='bookMovieDisplayDay'>{day3}</div>
          </div>
        </div>
        <div className='bookMoviefilter'>
          <div className='bookMovieLanguage'>
            {movie.original_language === "en"
              ? "English"
              : movie.original_language}
          </div>
        </div>
      </div>
      <div className='bookMovieTimeSelection'>
        <div className='bookMovieTime'>
          <div className='bookMovieHallName'>Galleria Cinemas</div>
          <div className='bookMovieTimes'>
            <div className='bookMovieTimeOne'>
              <button
                className='bookMovieButton'
                onClick={() => handleOnTimeButtonMorning(movie.id)}>
                {morning} AM
              </button>
            </div>
            <div className='bookMovieTimeOne'>
              <button
                className='bookMovieButton'
                onClick={() => handleOnTimeButtonAfterNoon(movie.id)}>
                {afternoon} PM
              </button>
            </div>
            <div className='bookMovieTimeOne'>
              <button
                className='bookMovieButton'
                onClick={() => handleOnTimeButtonEvening(movie.id)}>
                {evening} PM
              </button>
            </div>
            <div className='bookMovieTimeOne'>
              <button
                className='bookMovieButton'
                onClick={() => handleOnTimeButtonNight(movie.id)}>
                {night} PM
              </button>
            </div>
          </div>
        </div>
        <div className='bookMovieTimeAvailable'>
          <div className='available'>AVAILABLE</div>
          <div className='fast-filling'>FAST FILLING</div>
        </div>
      </div>
    </div>
  );
};

export default BookMovieDetails;
