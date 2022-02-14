import moment from "moment";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Header, PageHeader, Footer } from "../../components";
import { History } from "../../routers/AppRouter";
import {
  fetchNewsData,
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const NewsScreen = (props) => {
  useEffect(() => {
    props.fetchNewsData();
  }, []);

  return (
    <div>
      <Header />
      <PageHeader title="Latest news" />
      <div className="pageBody_80">
        {props.news.map((news, index) => (
          <div className="shop_details_container" key={index}>
            <div className="shop_details_left">
              <img src={news.images[0]} alt="product" />
            </div>
            <div className="shop_details_right">
              <p className="shop_details_title">{news.title}</p>
              <p className="date_published">
                Date Published: &nbsp;
                {moment(news.createdAt).format("DD-MM-YYYY")}
              </p>
              <p className="shop_details_desc">{news.content}</p>
              <button
                className="about_more_btn"
                style={{ margin: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  History.push({
                    pathname: `/news/${news._id}`,
                    state: news,
                  });
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                READ MORE
              </button>
            </div>
          </div>
        ))}
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
  fetchNewsData: () => dispatch(fetchNewsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
