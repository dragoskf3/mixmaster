import React from "react";
import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

function Newsletter() {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our NewsLetter
      </h4>
      <div className="form-row" alt="name">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          name="name"
          defaultValue="John"
        />
      </div>
      <div className="form-row" alt="lastName">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          id="lastName"
          name="lastName"
          defaultValue="Doe"
        />
      </div>
      <div className="form-row" alt="email">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          id="email"
          name="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  );
}

export default Newsletter;
