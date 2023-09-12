import React from "react";
import Slider from "react-slick";

// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/VideoCarousel.css";

function VideoCarousel({ video }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="video-carousel">
        <Slider {...settings}>
          {video.map((video) => {
            return (
              <div>
                <iframe
                  title="Crypto Guide"
                  height="auto"
                  width="50%"
                  src={video.url}
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
          {/* <div>
          <img
            src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          <iframe src="" height="400" width="500"></iframe>
        </div> */}
        </Slider>
      </div>
    </>
  );
}

export default VideoCarousel;
