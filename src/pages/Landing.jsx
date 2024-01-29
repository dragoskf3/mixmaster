import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Wrapper from "../Wrappers/About";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export const loader = async ({ request }) => {
  const url1 = new URL(request.url);
  console.log(url1);
  const searchTerm = url1.searchParams.get("search") || "";
  const result = await axios(url + searchTerm);
  console.log(result);
  return { drinks: result.data.drinks, searchTerm };
};

function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  console.log(drinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
