import React, { useState, useEffect } from "react";
import {
  AdminHeader,
  PageHeader,
  Footer,
  Input,
  SectionHeader,
  EditCarouselModal,
} from "../../components";
import { connect } from "react-redux";
import apiClient from "../../query/api";
import {
  setError,
  setSuccess,
  startLoading,
  stopLoading,
  updateSite,
  fetchSiteData,
} from "../../state/actions";
import moment from "moment";

const AdminEditCarouselsScreen = (props) => {
  const [data, setData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showAddCarouselForm, setShowAddCarouselForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState();
  const handleImageChange = ({ target }) => {
    setSelectedImage(target.files[0]);
  };

  console.log("selectedImage", selectedImage);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  useEffect(() => {
    props.fetchSiteData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("id", props.site._id);
      formdata.append("description", description);
      formdata.append("image", selectedImage);

      await apiClient.post("/api/site/create_carousel", formdata);
      props.setSuccess("Carousel Added Successfully");
      setShowAddCarouselForm(false);
      props.fetchSiteData();
      props.stopLoading();
      setTimeout(() => {
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };
  const onDeleteCarousel = async (e, carousel) => {
    e.preventDefault();
    props.startLoading();

    try {
      await apiClient.post("/api/site/delete_carousel", {
        carouselId: carousel.id,
        siteId: props.site._id,
      });
      props.setSuccess("Carousel Deleted Successfully");
      setShowAddCarouselForm(false);
      props.fetchSiteData();
      props.stopLoading();
      setTimeout(() => {
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };

  const handleModalOpen = (e, carousel) => {
    e.preventDefault();
    setData(carousel);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormShow = (e) => {
    e.preventDefault();
    setShowAddCarouselForm(!showAddCarouselForm);
  };

  return (
    <div>
      <AdminHeader />
      <PageHeader title="CAROUSELS" />
      <div className="pageBody_80">
        <div className="admin_card">
          <div className="input_container">
            <button className="input_button" onClick={handleFormShow}>
              {showAddCarouselForm === true ? "CANCEL" : "ADD CAROUSEL"}
            </button>
          </div>
          {showAddCarouselForm && (
            <div className="pageBody_80">
              <form style={{ marginTop: "50px" }}>
                <Input
                  type="text"
                  title="Carousel Title"
                  value={title}
                  onChange={handleTitleChange}
                />
                <Input
                  type="text"
                  title="Carousel Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <Input
                  onChange={handleImageChange}
                  type="file"
                  title="Carousel Image"
                />
                <div className="input_container">
                  <button className="input_button" onClick={onSubmit}>
                    {props.site.loading ? (
                      <div className="auth_input_loader" />
                    ) : (
                      "SAVE CAROUSEL"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div style={{ margin: "100px 0px" }}>
            <SectionHeader title="ALL CAROUSELS" />
          </div>
          <div className="review_overrall">
            <table className="review_container">
              <tr className="review_table_row">
                <th className="review_table_header">No.</th>
                <th className="review_table_header">Carousel Title</th>
                <th className="review_table_header">Carousel Description</th>
                <th className="review_table_header">Carousel Image</th>
                <th className="review_table_header">Operation Time</th>
                <th className="review_table_header">Actions</th>
              </tr>
              {props.site.carousels.length > 0 ? (
                props.site.carousels.map((carousel, i) => (
                  <tr key={i} className="review_table_row">
                    <td className="review_table_data">{i + 1}</td>
                    <td className="review_table_data">{carousel.title}</td>
                    <td className="review_table_data">
                      {carousel.description}
                    </td>
                    <td className="review_table_data table_images_container">
                      <img src={carousel.image} alt="carousel bg" />
                    </td>
                    <td className="review_table_data">
                      {moment(carousel.createdAt).format("hh:mm A, DD-MM-YYYY")}
                    </td>
                    <td className="review_table_data">
                      <button
                        className="custom_button"
                        onClick={(e) => handleModalOpen(e, carousel)}
                      >
                        Edit
                      </button>
                      <button
                        className="custom_button"
                        onClick={(e) => onDeleteCarousel(e, carousel)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="review_table_row">
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <EditCarouselModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={data}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (text) => dispatch(setError(text)),
  setSuccess: (text) => dispatch(setSuccess(text)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  updateSite: (data) => dispatch(updateSite(data)),
  fetchSiteData: () => dispatch(fetchSiteData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminEditCarouselsScreen);
