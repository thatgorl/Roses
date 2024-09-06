import React from "react";
import { Link } from "react-router-dom";
import Pics from "./Images/02-5-320x320.jpg";
import Pic2 from "./Images/02-12-320x320.jpg";
import Pic3 from "./Images/02-17-320x320.jpg";

//used carousel from bootstrap to display the products

function LandingPage() {
  return (
    <div id="LandingPage">
      <span>
        <h2 className="text-danger mt-3 p-2 text-center fs-1">
          Welcome to a rose for you.
        </h2>
      </span>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide h-50 m-3"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Pics}
              className="d-block mx-auto"
              alt="First slide"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Pic2}
              className="d-block mx-auto"
              alt="Second slide"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Pic3}
              className="d-block mx-auto"
              alt="Third slide"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center mt-4">
        <Link to="/products">
          <button className="btn btn-primary">View Products</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
