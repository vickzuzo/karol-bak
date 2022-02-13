import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { History } from "../../routers/AppRouter";
import Toggle from "../toggler/Toggle";

const AdminHeaderMobile = (props) => {
  const { siteTheme, setSiteTheme } = props;

  const [menuStatus, setMenuStatus] = useState(false);

  const [headerChange, setHeaderChange] = useState(false);

  useEffect(() => {
    const scroller = () => setHeaderChange(window.pageYOffset > 50);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scroller);
    }
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  const openMenu = () => {
    document.getElementById("menuToggle").style.width = "65%";
    document.getElementById("menuToggle").style.height = "100vh";
    setMenuStatus(true);
  };

  const closeMenu = () => {
    document.getElementById("menuToggle").style.width = "0px";
    document.getElementById("menuToggle").style.height = "0px";
    setMenuStatus(false);
  };
  const logo = "https://karolbak.com/wp-content/uploads/2020/05/logo_www.png";
  return (
    <div className="show_on_mobile">
      <div
        className={
          headerChange !== false
            ? "header_mobile header_mobile_change"
            : `header_mobile ${menuStatus === true && "header_bg-back"}`
        }
      >
        <div className="header_mobile_container">
          <img src={logo} className="logo_img" alt="Logo" />
          <div style={{ display: "flex" }}>
            <div className="header_icon__container">
              <Icon
                className="header_icon"
                size={24}
                icon={menuStatus ? ic_close : ic_menu}
                onClick={() => {
                  menuStatus ? closeMenu() : openMenu();
                }}
              />
            </div>
          </div>
        </div>
        <div className="header_mobile__menu_section" id="menuToggle">
          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/")}
          >
            <p>Home</p>
          </div>

          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/news")}
          >
            <p>News</p>
          </div>
          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/biography")}
          >
            <p>Biography</p>
          </div>
          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/gallery")}
          >
            <p>Gallery</p>
          </div>
          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/nft")}
          >
            <p>NFTs</p>
          </div>
          <div
            className="header_mobile__menu_container"
            onClick={() => History.push("/shop")}
          >
            <p>Shop</p>
          </div>

          <div className="header_mobile__menu_container">
            <Toggle
              checked={siteTheme}
              onChange={setSiteTheme}
              aria_label={siteTheme === true ? "Dark mode" : "Light mode"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeaderMobile;
