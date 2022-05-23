import React from "react";
import { History } from "../../routers/AppRouter";

const GalleryCategory = ({ data, index }) => {
  return (
    <div key={index} className="gallery_category_container" onClick={() => History.push(`/gallery/category/${data.cat}`)}>
      <img src={data.image} alt="cat" />
      <div className="gallery_category_overlay_container">
        <p>{data.cat}</p>
      </div>
    </div>
  );
};

export default GalleryCategory;
