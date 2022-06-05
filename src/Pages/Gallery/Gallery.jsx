import React, { useState } from "react";
import "./Gallery.css";
import Data from "../../Data/Data";
import Banner from "../../Components/Banner";
import SubTitle from "../../Components/SubTitle";
import { ImageViewer } from "react-image-viewer-dv";

function Gallery() {
  const [LightBox, setLightBox] = useState(false);
  const [imageIndex, setImageIndex] = useState([0]);
  const [lightBoxImage, setLightBoxImage] = useState([]);

  const getData = (item) => {
    setLightBox(true);
    setImageIndex([item.id]);
  };

  return (
    <div className="gallery">
      <Banner headLine="Gallery" />

      <section className="gallery_section">
        <div className="container">
          <div className="row">
            <SubTitle title="Gallery" />
            {Data.map((item, index) => {
              return (
                <div className="col-sm-6 col-lg-4 mb-4" key={item.id}>
                  <ImageViewer>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-3"
                      onClick={() => getData(item)}
                    />
                  </ImageViewer>
                </div>
              );
            })}
          </div>
          {/* light box */}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
