import React from "react";

const GalleryItem = (props) => {
  return (
    <div className="gallery_item_container" key={props.index}>
      <img src={props.data.image} alt="gallery_image" />
      <p className="gallery_item_title">{props.data.title}</p>
      <p className="gallery_item_desc">{props.data.description}</p>
    </div>
  );
};

export default GalleryItem;
