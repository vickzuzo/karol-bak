import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  AboutPainting,
  Carousel,
  Footer,
  GalleryItem,
  Header,
  SectionHeader,
  ViewImageModal,
} from "../../components";
// import { History } from "../../routers/AppRouter";
import {
  fetchGalleyData,
  fetchSiteData,
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const HomeScreen = (props) => {
  const filterGallery = () => {
    return props.gallery.filter(({ feature }) => feature === true);
  };

  const [featured, setFeatured] = useState([]);
  const [image, setImage] = useState();

  // console.log(featured);

  useEffect(() => {
    props.fetchSiteData();
    props.fetchGalleyData();
    setFeatured(filterGallery());
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (image) => {
    setImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  console.log(modalIsOpen);

  return (
    <div>
      <Header />
      <Carousel />
      <div style={{ marginBottom: "100px" }}>
        <SectionHeader title="Featured Exhibitions" />
      </div>
      <div className="pageBody_80">
        <div className="gallery_container">
          {featured.map((gallery, index) => (
            <div
              onClick={() => openModal(gallery.image)}
              key={index}
              className="gallery_item_container"
              key={props.index}
            >
              <img src={gallery.image} alt="gallery_image" />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "200px", marginBottom: "100px" }}>
        <SectionHeader title="About My paintings" />
      </div>
      <AboutPainting />
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
      <ViewImageModal
        image={image}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  site: state.site,
  user: state.user,
  gallery: state.gallery,
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (text) => dispatch(setSuccess(text)),
  setError: (text) => dispatch(setError(text)),
  setUser: (user) => dispatch(setUser(user)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchSiteData: () => dispatch(fetchSiteData()),
  fetchGalleyData: () => dispatch(fetchGalleyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
