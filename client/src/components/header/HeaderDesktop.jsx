import React, { useEffect, useState } from "react";
import { History } from "../../routers/AppRouter";
import imageDark from "../../assets/images/KBlogo-black.png";
import imageLight from "../../assets/images/KBlogo-white.png";
import { connect } from "react-redux";

const HeaderDesktop = (props) => {
  const { space } = props;

  const [headerChange, setHeaderChange] = useState(false);

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    const scroller = () => setHeaderChange(window.pageYOffset > 50);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scroller);
    }
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

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

  const handleMouseEnter = (e) => {
   setShowDropDown(true)
  };

  const handleMouseLeave = (e) => {
    setShowDropDown(false);
  };

  return (
    <div>
      <div>
        <div>
          <div
            className={
              headerChange !== false
                ? "header_desktop header_desktop_change"
                : "header_desktop"
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/")}
                >
                  <p>Home</p>
                </div>

                <div
                  className="header_icon__container"
                  onClick={() => History.push("/news")}
                >
                  <p>News</p>
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/biography")}
                >
                  <p>Biography</p>
                </div>
              </div>

              <div
                onClick={() => History.push("/")}
                style={{ cursor: "pointer" }}
                className="logo"
              >
                <img
                  src={props.site.theme === true ? imageLight : imageDark}
                  className="logo_img"
                  alt="KarolBak Logo"
                />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  className="header_icon__container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => History.push("/gallery")}
                >
                  <p>Gallery</p>
                  {showDropDown === true && (
                    <ul className="header_dropdown_container">
                      <div className="header_dropdown_year">
                        <p className="header_dropdown_title">Years</p>
                        <div>
                          {data.map((data, index) => (
                            <p
                              className="dd_yr_item"
                              key={index}
                              onClick={() =>
                                History.push(`/gallery/category/${data}`)
                              }
                            >
                              {data}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="header_dropdown_category">
                        <p className="header_dropdown_title">Category</p>
                        <div>
                          {categories.map((data, index) => (
                            <p
                              className="cat_item"
                              key={index}
                              onClick={() =>
                                History.push(`/gallery/category/${data}`)
                              }
                            >
                              {data}
                            </p>
                          ))}
                        </div>
                      </div>
                    </ul>
                  )}
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/nft")}
                >
                  <p>NFTs</p>
                </div>
                <div
                  className="header_icon__container"
                  onClick={() => History.push("/shop")}
                >
                  <p>Shop</p>
                </div>
              </div>
              {/* <Toggle
                checked={siteTheme}
                onChange={setSiteTheme}
                aria_label={siteTheme === true ? "Dark mode" : "Light mode"}
              /> */}
            </div>
          </div>
        </div>
        {space && (
          <div style={{ height: "60px" }} className="hide_on_mobile"></div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

export default connect(mapStateToProps)(HeaderDesktop);
