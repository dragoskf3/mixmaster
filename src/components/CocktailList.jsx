import React from "react";
import Wrapper from "../assets/Wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktails...</h4>;
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
}

export default CocktailList;
