import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  const { state } = useNavigation();
  const isPageLoading = state === "loading";
  console.log(state);
  return (
    <div style={{ marginTop: "1rem" }}>
      <Navbar />
      {isPageLoading ? <div className="loading"></div> : <Outlet />}
    </div>
  );
}

export default HomeLayout;
