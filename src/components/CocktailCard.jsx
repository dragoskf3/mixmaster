import React from "react";
import Wrapper from "../assets/Wrappers/CocktailCard";
import { Link } from "react-router-dom";

function CocktailCard({ name, image, info, id, glass }) {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
        <div className="footer">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link className="btn" to={`/cocktail/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default CocktailCard;
