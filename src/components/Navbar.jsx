import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../Wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <span className="logo">MIXMaster</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              NewsLetter
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
