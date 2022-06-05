import React from "react";
import "./Slider.css";
function Slider({ title, subTitle, desc }) {
  return (
    <div>
      <div className="carousel-item active">
        <div className="carousel-caption">
          <div className="banner-content">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <p>{desc}</p>
            <button className="btn main-btn">All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
