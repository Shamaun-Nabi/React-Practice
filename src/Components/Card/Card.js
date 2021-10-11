import React from "react";
import movie from "../../Movies";
import "./Card.css"

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        {movie.map((movie) => (
          <Uniquecard pd={movie} key={movie.id} ></Uniquecard>
        ))}
      </div>
    </div>
  );
};

const Uniquecard = (props) => {
  const movie = props.pd;
  return (
      <React.Fragment>
      <div className="col-md-4 col-sm-12">
        <div className="card  m-3">
          <img src={movie.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <h6>{movie.genre}</h6>
            <p className="card-text">{movie.desc}</p>
            <small className="text-muted">{movie.Starring}</small>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.duration}</small>
          </div>
        </div>
      </div>
      </React.Fragment>
     
    
  );
};

export default Card;
