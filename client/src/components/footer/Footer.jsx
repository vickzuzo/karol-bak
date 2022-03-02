import React from "react";
import Icon from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import logo from "../../assets/images/KBlogo-brown.png";
import { History } from "../../routers/AppRouter";
import { connect } from "react-redux";

const Footer = (props) => {
  return (
    <div className="footer_container">
      <div className="pageBody_80">
        <div className="footer_top">
          <div className="footer_top_left">
            <img src={logo} alt="logo" className="footer_logo_img" />

            <div className="footer_social_links_holder">
              <Icon
                icon={facebookSquare}
                onClick={() => {
                  window.location.href = props.site.facebook_link;
                }}
                className="facebook"
                size={30}
              />
              <Icon
                icon={instagram}
                onClick={() => {
                  window.location.href = props.site.instagram_link;
                }}
                className="instagram"
                size={30}
              />
              <Icon
                icon={twitterSquare}
                onClick={() => {
                  window.location.href = props.site.twitter_link;
                }}
                className="twitter"
                size={30}
              />
            </div>
          </div>
          <div className="footer_top_right">
            <p className="footer_link" onClick={() => History.push("/")}>
              Home
            </p>
            <p className="footer_link" onClick={() => History.push("/news")}>
              News
            </p>
            <p
              className="footer_link"
              onClick={() => History.push("/biography")}
            >
              Biography
            </p>
            <p className="footer_link" onClick={() => History.push("/nft")}>
              NFTs
            </p>
            <p className="footer_link" onClick={() => History.push("/shop")}>
              Shop
            </p>
          </div>
        </div>
        <div className="footer_bottom">
          <p>28 Jackson Blvd Ste 1020 Chicago 60604-2340</p>
          <p style={{ marginTop: "10px", fontSize: "13px" }}>
            &copy; 2022 | <span>PRIVACY POLICY</span>
          </p>
        </div>
      </div>
      <p
        className="footer_developer"
        onClick={() =>
          (window.location.href = "https://wa.me/message/BXJEQURGF5RFD1")
        }
      >
        DESIGNED by VZ-DESIGNS
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

export default connect(mapStateToProps)(Footer);
