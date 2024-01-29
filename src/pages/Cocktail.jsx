import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async (data) => {
  console.log(data);
  const { params } = data;
  const id = params.id;
  const response = await axios(url + id);
  console.log(id);
  return { id, response };
};

function Cocktail() {
  const { id, response } = useLoaderData();
  const singleDrink = response.data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  console.log(singleDrink);
  const validIngridients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  console.log(validIngridients);

  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt="" className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Ingridients:</span>
            {validIngridients.map((item, index) => {
              return (
                <span key={item}>
                  {item} {index < validIngridients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
      <div className="back-home">
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
