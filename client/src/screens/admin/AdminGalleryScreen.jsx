import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  AdminHeader,
  EditGalleryModal,
  Footer,
  Input,
  PageHeader,
  SectionHeader,
} from "../../components";
import apiClient from "../../query/api";
import {
  fetchGalleyData,
  setError,
  setSuccess,
  startLoading,
  stopLoading,
  updateSite,
} from "../../state/actions";

const AdminGalleryScreen = (props) => {
  const [data, setData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [showAddGalleryForm, setShowAddGalleryForm] = useState(false);

  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = ({ target }) => {
    setSelectedImage(target.files[0]);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };
  const categories = [
    "Drawing / Graphicscs",
    "Ink / Feather",
    "pastel",
    "frescosSketches",
    "Copperplate",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
  ];

  useEffect(() => {
    props.fetchGalleyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("category", category);
      formdata.append("image", selectedImage);

      await apiClient.post("/api/gallery/create_gallery", formdata);
      props.setSuccess("category Added Successfully");
      setShowAddGalleryForm(false);
      props.fetchGalleyData();
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

  const onDeleteGallery = async (e, gallery) => {
    e.preventDefault();
    props.startLoading();

    try {
      await apiClient.post("/api/gallery/delete_gallery", {
        id: gallery._id,
      });
      props.setSuccess("Gallery Deleted Successfully");
      setShowAddGalleryForm(false);
      props.fetchGalleyData();
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

  const handleModalOpen = (e, category) => {
    e.preventDefault();
    setData(category);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormShow = (e) => {
    e.preventDefault();
    setShowAddGalleryForm(!showAddGalleryForm);
  };

  return (
    <div>
      <AdminHeader />
      <PageHeader title="Gallery" />
      <div className="pageBody_80">
        <div className="admin_card">
          <div className="input_container">
            <button className="input_button" onClick={handleFormShow}>
              {showAddGalleryForm === true ? "CANCEL" : "ADD GALLERY"}
            </button>
          </div>
          {showAddGalleryForm && (
            <div className="pageBody_80">
              <form style={{ marginTop: "50px" }}>
                <Input
                  type="text"
                  title="Gallery Title"
                  value={title}
                  onChange={handleTitleChange}
                />
                <Input
                  type="text"
                  title="Gallery Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <div className="input_container">
                  <select
                    type="text"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <span>Gallery Category</span>
                </div>
                <Input
                  onChange={handleImageChange}
                  type="file"
                  title="Gallery Image"
                />
                <div className="input_container">
                  <button className="input_button" onClick={onSubmit}>
                    {props.site.loading ? (
                      <div className="auth_input_loader" />
                    ) : (
                      "SAVE GALLERY"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div style={{ margin: "100px 0px" }}>
            <SectionHeader title="ALL GALLERIES" />
          </div>
          <div className="review_overrall">
            <table className="review_container">
              <tr className="review_table_row">
                <th className="review_table_header">No.</th>
                <th className="review_table_header">Gallery Title</th>
                <th className="review_table_header">Gallery Description</th>
                <th className="review_table_header">Gallery Category</th>
                <th className="review_table_header">Gallery Image</th>
                <th className="review_table_header">Operation Time</th>
                <th className="review_table_header">Actions</th>
              </tr>
              {props.gallery.length > 0 ? (
                props.gallery.map((gallery, i) => (
                  <tr key={i} className="review_table_row">
                    <td className="review_table_data">{i + 1}</td>
                    <td className="review_table_data">{gallery.title}</td>
                    <td className="review_table_data">{gallery.description}</td>
                    <td className="review_table_data">{gallery.category}</td>
                    <td className="review_table_data table_images_container">
                      <img src={gallery.image} alt="gallery bg" />
                    </td>
                    <td className="review_table_data">
                      {moment(gallery.createdAt).format("hh:mm A, DD-MM-YYYY")}
                    </td>
                    <td className="review_table_data">
                      <button
                        className="custom_button"
                        onClick={(e) => handleModalOpen(e, gallery)}
                      >
                        Edit
                      </button>
                      <button
                        className="custom_button"
                        onClick={(e) => onDeleteGallery(e, gallery)}
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
                  <td className="review_table_data">No Data</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <EditGalleryModal
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
  gallery: state.gallery,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (text) => dispatch(setError(text)),
  setSuccess: (text) => dispatch(setSuccess(text)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  updateSite: (data) => dispatch(updateSite(data)),
  fetchGalleyData: () => dispatch(fetchGalleyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminGalleryScreen);
