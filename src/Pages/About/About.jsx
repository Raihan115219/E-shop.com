import React from "react";
import "./About.css";
import about from "../../Assest/images/about/about-img.jpg";
import Banner from "../../Components/Banner";
import SubTitle from "../../Components/SubTitle";

function About() {
  return (
    <div className="about">
      <Banner headLine="About Us" />

      <section class="about_section">
        <div class="container">
          <div class="row justify-content-center">
            <SubTitle title="Abou US" />
          </div>
          <div class="row align-items-center py-5">
            <div class="col-lg-6 col-12 mb-4">
              <img src={about} alt="about" class="img-fluid" />
            </div>
            <div class="col-lg-6 col-12 mb-4">
              <div class="about-content">
                <div class="about-details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam adipisci amet minus eligendi autem! Sit iure
                    officiis quo dolorum non recusandae ut tempora laboriosam
                    quas tempore mollitia voluptatibus minus doloremque, sunt
                    pariatur minima at repellat itaque enim fugit? Beatae,
                    itaque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, dolorum quia optio accusamus ipsum repudiandae
                    temporibus nihil sapiente expedita aperiam porro beatae
                    exercitationem tempore rem?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-center py-5">
            <div class="col-lg-6 col-12 mb-4 order-2 order-lg-1">
              <div class="about-content">
                <div class="about-details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam adipisci amet minus eligendi autem! Sit iure
                    officiis quo dolorum non recusandae ut tempora laboriosam
                    quas tempore mollitia voluptatibus minus doloremque, sunt
                    pariatur minima at repellat itaque enim fugit? Beatae,
                    itaque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, dolorum quia optio accusamus ipsum repudiandae
                    temporibus nihil sapiente expedita aperiam porro beatae
                    exercitationem tempore rem?
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12 mb-4 order-1 order-lg-2">
              <img src={about} alt="about" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
