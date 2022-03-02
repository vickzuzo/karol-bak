import createHistory from "history/createBrowserHistory";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Route, Router, Switch } from "react-router-dom";
import { Toggle } from "../components";
import {
  AdminEditCarouselsScreen,
  AdminEditSiteDetailsScreen,
  AdminGalleryScreen,
  // ADMIN IMPORTS
  AdminLoginScreen,
  AdminNewsScreen,
  AdminProductsScreen,
  AllGalleryScreen,
  BiographyScreen,
  GalleryScreen,
  GalleryScreenMobile,
  HomeScreen,
  NewsScreen,
  NftScreen,
  NotFoundScreen,
  ShopScreen,
  ViewNewsScreen,
} from "../screens";
import { setTheme } from "../state/actions";
import ScrollToTop from "../utils/ScrollToTop";
import PrivateRoute from "./PrivateRoute";

export const History = createHistory();

const AppRouter = (props) => {
  const DARK_CLASS = "dark";

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const siteTheme = props.site.theme ? props.site.theme : false;

  const [, setIsDark] = useState(siteTheme);

  const setSiteTheme = (e) => {
    const value = e.target.checked;
    props.setTheme(value);
  };

  useEffect(() => {
    if (props.site.theme === undefined) {
      props.setTheme(systemPrefersDark);
    }
    if (props.site.theme === true) {
      document.documentElement.classList.add(DARK_CLASS);
    } else if (props.site.theme === false) {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [props, props.site.theme, systemPrefersDark]);

  return (
    <Router history={History}>
      <ScrollToTop>
        <Switch>
          {/** =============== GENERAL SCREEN ROUTES STARTS HERE =============== */}
          <Route path="/" component={HomeScreen} exact={true} />
          <Route path="/biography" component={BiographyScreen} />
          <Route path="/gallery" component={AllGalleryScreen} exact />
          <Route path="/gallery-m" component={GalleryScreenMobile} exact />
          <Route path="/gallery/category/:id" component={GalleryScreen} exact />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/nft" component={NftScreen} />
          <Route path="/news" component={NewsScreen} exact />
          <Route path="/news/:id" component={ViewNewsScreen} />
          {/* ADMIN SCREENS */}
          <Route path="/admin/login" component={AdminLoginScreen} />
          <PrivateRoute
            path="/admin/products"
            component={AdminProductsScreen}
          />
          <PrivateRoute path="/admin/gallery" component={AdminGalleryScreen} />
          <PrivateRoute
            path="/admin/edit-site-details"
            component={AdminEditSiteDetailsScreen}
          />
          <PrivateRoute
            path="/admin/edit-carousels"
            component={AdminEditCarouselsScreen}
          />
          <PrivateRoute path="/admin/news" component={AdminNewsScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </ScrollToTop>

      <div className="hide_on_mobile home_toggle">
        <Toggle
          checked={siteTheme}
          onChange={setSiteTheme}
          aria_label={siteTheme === true ? "Dark mode" : "Light mode"}
        />
        <p className="current_theme">{siteTheme === true ? "Dark" : "Light"}</p>
      </div>
    </Router>
  );
};
const mapStateToProps = (state) => ({
  site: state.site,
});
const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
