import React from "react";
import { NavLink } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "../../Data/Data";
import HomeCarosel from "../../Components/HomeCarosel";
import SubTitle from "../../Components/SubTitle";
import Slider from "react-slick/lib/slider";
import Feature from "../../Data/FeaturesData";
import Service from "../../Data/ServiceData";
import Testmonial from "../../Data/TestimonialData";
import { settings, settings2 } from "../../SliderSetings/SliderSetings";
import HomeLanding from "./HomeLanding";

function Home() {
  return (
    <div>
      <section className="banner_section">
        <div className="container">
          <HomeCarosel />
        </div>
      </section>

      <section className="feature_section">
        <div className="container">
          <div className="row">
            {Service.map((item) => {
              return (
                <div className="col-6 col-lg-3 mb-5" key={item.id}>
                  <div className="card features-box">
                    <div className="text-center">
                      <div className="features-icon-border">
                        <div className="features-icon">
                          <img src={item.img} alt="features icons" />
                        </div>
                      </div>
                      <div className="features-text">
                        <h3>{item.suport}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="landing_about_section">
        <div className="container">
          <div className="row align-items-center">
            <HomeLanding />
          </div>
        </div>
      </section>
      <section className="landing_product_section">
        <div className="container">
          <div className="row justify-content-center">
            <SubTitle title="Recent Product" />
          </div>
          <div className="row mx-0">
            <Slider {...settings}>
              {Feature.map((item) => {
                return (
                  <div className="col-lg-3 col-sm-6 mb-5 px-3" key={item.id}>
                    <div className="card product-card">
                      <div className="product-img">
                        <img
                          src={item.img}
                          alt="mask milon"
                          className="img-fluid"
                        />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h3>{item.Name}</h3>
                        <span>{item.Price}</span>
                      </div>
                      <div className="product-detail">
                        <NavLink to="/" className="btn main-btn">
                          View Product
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="row pb-5">
            <SubTitle title="Testmonial Section" />
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-md-10">
              <Slider {...settings2}>
                {Testmonial.map((testmonial, index) => {
                  return (
                    <div className="d-sm-flex" key={index}>
                      <div className="profile-box col-sm=5">
                        <img
                          src={testmonial.img}
                          alt="customaer"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card col-sm-7">
                        <div className="desc-box">
                          <p className="fst-italic">{testmonial.review}</p>
                          <div className="my-4">
                            <h4>{testmonial.Name}</h4>
                            <p className="m-0 text-white">Happy Customer</p>
                          </div>
                          <img
                            src={testmonial.quote}
                            alt="review"
                            className="float-end"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery_section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pb-5">
              <h2 className="section-title">Our Gallery</h2>
              <p className="section-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, reprehenderit recusandae aperiam repellat molestias
                quod.
              </p>
            </div>
            {Data.map((item, index) => {
              return (
                <div class="col-sm-6 col-lg-4 mb-4" key={item.id}>
                  <img src={item.image} alt="" class="img-fluid rounded-3" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 
    <!-- gallery section End --> */}
    </div>
  );
}

export default Home;
