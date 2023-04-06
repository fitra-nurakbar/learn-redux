import React from "react";
import { ShowProduct } from "../components/ShowProduct";

export const LandingPage = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};
