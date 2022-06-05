import React from "react";
import { NavLink } from "react-router-dom";

function HomeCarosel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption">
              <div className="banner-content">
                <h1>100% organic</h1>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis modi nesciunt vero eligendi odio eveniet!
                </p>
                <NavLink to="/product" className="btn main-btn">
                  All Products
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <div className="banner-content">
                <h1>100% organic</h1>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, quo!
                </p>
                <a href="Product.html" className="btn main-btn">
                  All Products
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <div className="banner-content">
                <h1>100% organic</h1>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, quo!
                </p>
                <a href="Product.html" className="btn main-btn">
                  All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarosel;
