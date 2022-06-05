import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <section className="footer-wrapper mt-3 mb-md-0">
        <div className="container px-5 px-lg-0">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>lorem</h5>
              <p className="mb-4 ps-0 company-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                fuga eaque omnis fugiat hic repudiandae.
              </p>
              <div className="contact-info">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i className="fa fa-home me-3"></i>No. 96, south city,
                      London
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope me-3"></i>demo@gamil.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone me-3"></i>+568185328
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>Customer suport</h5>
              <ul className="link-widget p-0">
                <li>
                  <a href="#">About US</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Condition</a>
                </li>
                <li>
                  <a href="#">Product Returns</a>
                </li>
                <li>
                  <a href="#">Wholesle Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>Quick Links</h5>
              <ul className="link-widget p-0">
                <li>
                  <a href="#">About US</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Condition</a>
                </li>
                <li>
                  <a href="#">Product Returns</a>
                </li>
                <li>
                  <a href="#">Wholesle Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>News Letter</h5>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control bg-transparent"
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="btn main-btn">
                  Subscribe
                </button>
              </div>
              <h5>Stay Connected</h5>
              <ul className="social-network d-flex align-items-center p-0">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright-section">
          <p>copy rigth text</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
