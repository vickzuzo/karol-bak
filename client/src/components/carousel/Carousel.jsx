import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CarouselArrows from "./CarouselArrows";
import CarouselDots from "./CarouselDots";

const Carousel = (props) => {
  const slidesData = [
    {
      title: "We are proud",
      author: "Karol Bak",
      description: `standard dummy text ever since 1500s.`,
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/projekt-okladki-plyty-dla-shawn-james-the-shapeshifters.jpg",
    },
    {
      title: "We are active",
      author: "Karol Bak",
      description: `standard dummy text ever since 1500s.`,
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/IMG_6416-801x800.jpg",
    },
    {
      title: "We are proud",
      author: "Karol Bak",
      description: `standard dummy text ever since 1500s.`,
      image:
        "https://karolbak.com/wp-content/uploads/2020/05/PARCAE-80x110-onp-1110x800.jpg",
    },
    {
      title: "We are active",
      author: "Karol Bak",
      description: `standard dummy text ever since 1500s.`,
      image:
        "https://karolbak.com/wp-content/uploads/2020/07/SEN-ANIO%C5%81A-V-90x902020-1-809x800.jpg",
    },
  ];

  const carouselData =
    props.site?.carousels.length > 0 ? props.site?.carousels : slidesData;
  const len = carouselData.length - 1;

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
        {carouselData.map((slide, index) => {
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
          slidesData={carouselData}
        />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

export default connect(mapStateToProps)(Carousel);
