import React from "react";
import { NavLink } from "react-router-dom";

function HomeLanding() {
  return (
    <div>
      <div className="col-xl-5 col-lg-6 col-sm-8">
        <div className="about-content">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <div className="about-details">
            <p className="fw-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              vero.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates ipsam quo ullam provident omnis dolorem a similique.
              Et, ipsum sequi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              commodi excepturi veniam, architecto beatae ducimus?
            </p>
            <NavLink to="/product" className="btn main-btn">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
