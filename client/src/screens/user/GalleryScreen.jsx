import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Footer, GalleryItem, Header, PageHeader } from "../../components";
import {
  fetchGalleyData,
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const GalleryScreen = (props) => {
  const { id } = props.match.params;
  useEffect(() => {
    props.fetchGalleyData();
  }, []);

  const data = props.gallery.filter(({ category }) => category === id);
  return (
    <div>
      <Header />
      <PageHeader title={`Category: ${id}`} />
      <div className="pageBody_80">
        <div className="gallery_container" style={{ margin: "100px 0px" }}>
          {data.length > 0 ? (
            data.map((gallery, index) => (
              <GalleryItem index={index} data={gallery} />
            ))
          ) : (
            <div className="admin_card">
              No gallery was found in this category.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
  gallery: state.gallery,
  product: state.product,
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (text) => dispatch(setSuccess(text)),
  setError: (text) => dispatch(setError(text)),
  setUser: (user) => dispatch(setUser(user)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchGalleyData: () => dispatch(fetchGalleyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
