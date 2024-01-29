import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

function SearchForm({ SearchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" className="form-input" />
        <button
          type="submit"
          className="btn"
          disabled={isSubmitting}
          defaultValue={SearchTerm}
        >
          Search
        </button>
      </Form>
    </Wrapper>
  );
}

export default SearchForm;
