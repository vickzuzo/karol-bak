import React from "react";
import { connect } from "react-redux";
import { GalleryCategory, Header, PageHeader } from "../../components";

const AllGalleryScreen = (props) => {
  const categories = [
    {
      cat: "Drawing / Graphics",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "Ink / Feather",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "pastel",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "frescosSketches",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "Copperplate",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2022",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2021",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2020",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2019",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2018",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2017",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2016",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2015",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2014",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2013",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2012",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2011",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2010",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2009",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2008",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2007",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2006",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2005",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2004",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
    {
      cat: "2003",
      image:
        "https://res.cloudinary.com/vickzuzo/image/upload/v1646316797/KAROL-BAK/wdcmtjm1obgzowskq4cg.png",
    },
  ];

  return (
    <div>
      <Header />
      <PageHeader title="All Gallery" />
      <div className="pageBody_80" style={{ margin: "100px auto" }}>
        <div className="gallery_container">
          {categories.map((category, index) => (
            <GalleryCategory data={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
  gallery: state.gallery,
});

export default connect(mapStateToProps)(AllGalleryScreen);
