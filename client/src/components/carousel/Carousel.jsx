import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CarouselArrows from "./CarouselArrows";
import CarouselDots from "./CarouselDots";

const Carousel = (props) => {
  const slidesData = [
    {
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316559/KAROL-BAK/ghuzywagl4dh25tyrmbs.png",
    },
    {
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316821/KAROL-BAK/hbrj0eguxkww1d5ahv1z.png",
    },
    {
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316841/KAROL-BAK/hfhii0odif8yyrw18dfz.png",
    },
  ];

  const len = slidesData.length - 1;

  const [activeCarousel, setActiveCarousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel(activeCarousel === len ? 0 : activeCarousel + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [len, activeCarousel]);


  return (
    <div className="slider_container">
      <section>
        {slidesData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === activeCarousel
                  ? "slides active_carousel"
                  : "inactive_carousel"
              }
            >
              <img
                className="slides_image"
                src={slide.image}
                alt={slide.image}
              />
              <div className="slides_content">
                <h3 className="slides_title">{slide.title}</h3>
                <p className="slides_desc">{slide.description}</p>
                <p className="slides_author">
                  <span className="slides_author_bar"></span>
                  KAROL BAK
                </p>
              </div>
            </div>
          );
        })}
        <CarouselArrows
          goToPrevSlide={() =>
            setActiveCarousel(activeCarousel < 1 ? len : activeCarousel - 1)
          }
          goToNextSlide={() =>
            setActiveCarousel(activeCarousel === len ? 0 : activeCarousel + 1)
          }
        />
        <CarouselDots
          activeCarousel={activeCarousel}
          onclick={(activeCarousel) => setActiveCarousel(activeCarousel)}
          slidesData={slidesData}
        />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

export default connect(mapStateToProps)(Carousel);
