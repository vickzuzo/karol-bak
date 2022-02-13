import React from "react";
import { Header, PageHeader, Footer } from "../../components";
import Icon from "react-icons-kit";
import { History } from "../../routers/AppRouter";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";
import { connect } from "react-redux";
import {
  fetchSiteData,
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const ShopScreen = (props) => {
  return (
    <div>
      <Header />
      <PageHeader title="shop" />
      <div className="pageBody_80">
        <div className="shop_container" style={{ margin: "100px 0px" }}>
          {props.product.map((product, index) => (
            <div className="shop_item_container" key={index}>
              <img src={product.images[0]} alt="shop_image" />
              <p className="shop_item_title">{product.title}</p>
              <div className="shop_item_bottom">
                <p>{product.price}</p>
                <button className="custom_button" style={{ margin: 0 }}>
                  BUY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
  user: state.user,
  product: state.product,
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (text) => dispatch(setSuccess(text)),
  setError: (text) => dispatch(setError(text)),
  setUser: (user) => dispatch(setUser(user)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchSiteData: () => dispatch(fetchSiteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
