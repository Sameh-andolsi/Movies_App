import React from 'react'
import ReactStars from "react-stars";
import { Button } from 'react-bootstrap';
import "./MovieCard.css";
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
  return (
    <div className="composant">
      <h1 className="titre">{movie.title} </h1>

      <img src={movie.posterURL} alt={movie.title} className="image" />
      <br />
      <div>
        <ReactStars
          className="stars"
          count={5}
          edit={false}
          half={false}
          value={movie.rating}
          size={24}
          color2={"#ffd700"}
        />
        <Link to={`/movie/${movie.id}`}>
          <Button variant="success" style={{ marginTop: "5%" }}>
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard