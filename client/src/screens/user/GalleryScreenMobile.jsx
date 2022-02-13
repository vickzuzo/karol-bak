import React from "react";
import { Header, PageHeader, Footer } from "../../components";
import { History } from "../../routers/AppRouter";

const GalleryScreenMobile = () => {
  const data = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2009, 2008, 2007,
    2006, 2005, 2004,
  ];

  const categories = [
    "Drawing / Graphicscs",
    "Ink / Feather",
    "pastel",
    "frescosSketches",
    "Copperplate",
  ];
  return (
    <div className="show_on_mobile">
      <Header />
      <PageHeader />
      <div className="pageBody_80">
        <ul className="gallery_m_container">
          <div className="gallery_m_year">
            <p className="gallery_m_title">Years</p>
            <div>
              {data.map((data, index) => (
                <p
                  className="dd_yr_item"
                  key={index}
                  onClick={() => History.push(`/gallery/category/${data}`)}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
          <div className="gallery_m_category">
            <p className="gallery_m_title">Category</p>
            <div>
              {categories.map((data, index) => (
                <p
                  className="cat_item"
                  key={index}
                  onClick={() => History.push(`/gallery/category/${data}`)}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryScreenMobile;
