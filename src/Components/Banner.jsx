import React from "react";

function Banner({ headLine }) {
  return (
    <div>
      <section className="banner_section">
        <div className="container">
          <div className="banner-content">
            <h1>{headLine}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
