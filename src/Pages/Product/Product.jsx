import React from "react";
import { NavLink } from "react-router-dom";
import product from "../../Assest/images/products/fresh-fruits1.jpg";
import product2 from "../../Assest/images/products/fresh-fruits2.jpg";
import Banner from "../../Components/Banner";
import SubTitle from "../../Components/SubTitle";

function Product() {
  return (
    <div className="product">
      <Banner headLine="Product" />

      <section class="product_section">
        <div class="container">
          <SubTitle title="Product" />
          <div class="row align-content-center py-5">
            <div class="col-xl-5 col-lg-6 col-12 mb-5">
              <div class="card border-0 me-lg-5">
                <img src={product} alt="prduct" class="img-fluid" />
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-12 mb-5">
              <div class="product-content">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div class="product-details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quas ab aspernatur saepe minima modi voluptas
                    voluptatum quos labore soluta tenetur adipisci, doloribus
                    nam alias.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam facilis soluta sit!
                  </p>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam, eius unde!
                  </p>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate natus accusantium dicta ab perspiciatis eum
                    nostrum modi fuga.
                  </p>
                  <NavLink to="product" className="btn main-btn">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-content-center py-5">
            <div class="col-xl-7 col-lg-6 col-12 mb-5 order-2 order-lg-1">
              <div class="product-content">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <div class="product-details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum quas ab aspernatur saepe minima modi voluptas
                    voluptatum quos labore soluta tenetur adipisci, doloribus
                    nam alias.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam facilis soluta sit!
                  </p>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam, eius unde!
                  </p>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate natus accusantium dicta ab perspiciatis eum
                    nostrum modi fuga.
                  </p>
                  <NavLink to="product" className="btn main-btn">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-12 mb-5 order-1 order-lg-2">
              <div class="card border-0 me-lg-5">
                <img src={product2} alt="prodcut" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
