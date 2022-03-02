import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CarouselArrows from "./CarouselArrows";
import CarouselDots from "./CarouselDots";
import { useSpring, animated } from "@react-spring/web";

const Carousel = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

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
                style={{ transform: props.xy.interpolate(trans1) }}
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
