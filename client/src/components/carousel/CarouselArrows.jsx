import React from "react";
import Icon from "react-icons-kit";

import {ic_east} from 'react-icons-kit/md/ic_east';
import {ic_west} from 'react-icons-kit/md/ic_west';

const CarouselArrows = (props) => {
  return (
    <div className="slider_arrows_container">
      <Icon
        className="prev_arrow"
        size={35}
        icon={ic_west}
        onClick={props.goToPrevSlide}
      />
      <Icon
        className="next_arrow"
        size={35}
        icon={ic_east}
        onClick={props.goToNextSlide}
      />
    </div>
  );
};

export default CarouselArrows;
