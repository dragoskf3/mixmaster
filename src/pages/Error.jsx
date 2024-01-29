import React from "react";
import Wrapper from "../Wrappers/Error";
import { Link, useRouteError } from "react-router-dom";
import imageError from "../assets/not-found.svg";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={imageError} alt="error" />
          <p>We can t seem to find the page you are looking for</p>
          <Link to="/">Home page</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>Something went wrong</div>
    </Wrapper>
  );
}

export default Error;
