import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { History } from "../../routers/AppRouter";
import { logout } from "../../state/actions";

const AdminHeaderDesktop = (props) => {
  const { space } = props;
  const logo = "https://karolbak.com/wp-content/uploads/2020/05/logo_www.png";

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
                {props.user.token !== "" && (
                  <>
                    <div
                      className="header_icon__container"
                      onClick={() => History.push("/admin/products")}
                    >
                      <p>Products</p>
                    </div>

                    <div
                      className="header_icon__container"
                      onClick={() => History.push("/admin/edit-carousels")}
                    >
                      <p>Edit Carousels</p>
                    </div>
                    <div
                      className="header_icon__container"
                      onClick={() => History.push("/admin/gallery")}
                    >
                      <p>Galleries</p>
                    </div>
                  </>
                )}
              </div>

              <div
                onClick={() => History.push("/admin/products")}
                style={{ cursor: "pointer" }}
                className="logo"
              >
                <img src={logo} className="logo_img" alt="Karol Bak Logo" />
              </div>

              <div style={{ display: "flex" }}>
                {props.user.token !== "" && (
                  <>
                    <div
                      className="header_icon__container"
                      onClick={() => History.push("/admin/edit-site-details")}
                    >
                      <p>Edit Site Details</p>
                    </div>
                    <div
                      className="header_icon__container"
                      onClick={() => History.push("/admin/news")}
                    >
                      <p>News</p>
                    </div>
                    <div
                      className="header_icon__container"
                      onClick={() => props.logout()}
                    >
                      <p>Logout</p>
                    </div>
                  </>
                )}
              </div>
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
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeaderDesktop);
