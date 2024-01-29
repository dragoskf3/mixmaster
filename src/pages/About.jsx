import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrappers/About";
function About() {
  return (
    <Wrapper>
      <div className="about-container">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptatem aut. Eligendi iusto labore voluptates unde
          aut quos a vitae nulla. Natus quo dolor animi quos et cum corporis
          modi.
        </p>
      </div>
    </Wrapper>
  );
}

export default About;
