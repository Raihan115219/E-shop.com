import React from "react";
import { Link } from "react-router-dom";
import error from "../../Assest/images/error_404.png";

function NotFound() {
  return (
    <div className="error">
      <section className="banner_section">
        <div className="container">
          <div className="banner-content">
            <h1>404 Error Page</h1>
          </div>
        </div>
      </section>

      <section className="contact_section">
        <div className="container">
          <div className="row align-content-center flex-column flex-lg-row-reverse">
            <div className="col-lg-7 mb-5 lg-0">
              <div className="">
                <img src={error} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 mt-5 text-center text-lg-start">
              <h2 className="section-title">Opps...This page is not found</h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                voluptas! Vero magnam temporibus soluta hic?
              </p>
              <Link to="/">
                <button className="btn main-btn">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
