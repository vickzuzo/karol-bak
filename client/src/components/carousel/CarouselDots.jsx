import React from 'react'

const CarouselDots = (props) => {
  return (
    <div className='carousel_dots_container'>
      {props.slidesData.map((slide, index) => (
        <span key={index} className={`${props.activeCarousel === index ? 'carousel_dot active_carousel_dot' : 'carousel_dot'}`} onClick={(event) => props.onclick((event.target.value = index))}></span>
      ))}
    </div>
  )
}

export default CarouselDots
