import React from "react";
import "./Contact";
import InputForm from "../../Components/InputForm";
import ContactInfo from "../../Components/ContactInfo";
import Banner from "../../Components/Banner";
import SubTitle from "../../Components/SubTitle";
function Contact() {
  return (
    <div className="contact">
      <Banner headLine="Contact Us" />
      <section className="contact_section">
        <div className="container">
          <div className="row justify-content-center">
            <SubTitle title="Contact US" />
            <div className="col-12 contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <InputForm />
                </div>
                <div className="col-lg-6">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
