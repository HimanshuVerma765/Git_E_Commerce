import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="HomeBannerSection">
      <Slider {...settings}>
      
        <div className="item">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/23092024-D-UHP-mainbanner-HM-1440x470.jpg" className="w-100" />
        </div>
        <div className="item">
            <img src="https://www.beyoung.in/api/catalog/homepage-oct/Desktop/banner/new/Oversized-Desktop-view.jpg" className="w-100" />
        </div>
        <div className="item">
            <img src="https://www.beyoung.in/api/catalog/homepage-oct/Desktop/banner/new/Embroidered-shirts-Desktop-view.jpg" className="w-100" />
        </div>
        <div className="item">
            <img src="https://www.beyoung.in/api/catalog/homepage-oct/Desktop/banner/new/cargo-jogger-desktop.jpg" className="w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
