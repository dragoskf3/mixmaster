import React from "react";
import { useRouteError } from "react-router-dom";
import Wrapper from "../Wrappers/Error";

function SingleErrorPage() {
  const error = useRouteError();

  return (
    <Wrapper>
      <div style={{ marginTop: "-30rem" }}>{error.message}</div>
    </Wrapper>
  );
}

export default SingleErrorPage;
