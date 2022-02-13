import React, { useState, useEffect } from "react";
import {
  AdminHeader,
  PageHeader,
  Footer,
  Input,
  SectionHeader,
  TextArea,
  EditNewsModal,
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
  fetchNewsData,
} from "../../state/actions";
import moment from "moment";

const AdminNewsScreen = (props) => {
  const [data, setData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showAddNewsForm, setShowAddNewsForm] = useState(false);

  const [selectedImages, setSelectedImages] = useState();

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setSelectedImages([...files]);
    }
  };

  const handleFormShow = (e) => {
    e.preventDefault();
    setShowAddNewsForm(!showAddNewsForm);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  useEffect(() => {
    props.fetchNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("content", description);
      selectedImages.forEach((image) => {
        formdata.append("images", image);
      });

      await apiClient.post("/api/news/create_news", formdata);
      props.setSuccess("News Added Successfully");
      setShowAddNewsForm(false);
      props.fetchNewsData();
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
  const onDeleteNews = async (e, news) => {
    e.preventDefault();
    props.startLoading();

    try {
      await apiClient.post("/api/news/delete_news", {
        id: news._id,
      });
      props.setSuccess("News Deleted Successfully");
      setShowAddNewsForm(false);
      props.fetchNewsData();
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

  const handleModalOpen = (e, news) => {
    e.preventDefault();
    setData(news);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <AdminHeader />
      <PageHeader title="NEWS" />
      <div className="pageBody_80">
        <div className="admin_card">
          <div className="input_container">
            <button className="input_button" onClick={handleFormShow}>
              {showAddNewsForm === true ? "CANCEL" : "ADD NEWS"}
            </button>
          </div>
          {showAddNewsForm && (
            <div className="pageBody_80">
              <form style={{ marginTop: "50px" }}>
                <Input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  title="News Title"
                />
                <TextArea
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  title="News Content"
                />
                <Input
                  onChange={handleImageChange}
                  type="file"
                  multiple
                  title="News Image"
                />
                <div className="add_product_images_preview_container">
                  {selectedImages && (
                    <img
                      src={URL.createObjectURL(selectedImages)}
                      alt="product_preview"
                    />
                  )}
                </div>
                <div className="input_container">
                  <button className="input_button" onClick={onSubmit}>
                    {props.site.loading ? (
                      <div className="auth_input_loader" />
                    ) : (
                      "SAVE NEWS"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div style={{ margin: "100px 0px" }}>
            <SectionHeader title="ALL NEWS" />
          </div>
          <div className="review_overrall">
            <table className="review_container">
              <tr className="review_table_row">
                <th className="review_table_header">No.</th>
                <th className="review_table_header">News Title</th>
                <th className="review_table_header">News Content</th>
                <th className="review_table_header">News Image</th>
                <th className="review_table_header">Operation Time</th>
                <th className="review_table_header">Actions</th>
              </tr>
              {props.news.length >= 1 ? (
                props.news.map((news, i) => (
                  <tr key={i} className="review_table_row">
                    <td className="review_table_data">{i + 1}</td>
                    <td className="review_table_data">{news.title}</td>
                    <td className="review_table_data news_content">
                      {news.content}
                    </td>
                    <td className="review_table_data table_images_container">
                      {news.images.length > 0 &&
                        news.images.map((image, index) => (
                          <img key={index} src={image} alt="news" />
                        ))}
                    </td>

                    <td className="review_table_data">
                      {moment(news.createdAt).format("hh:mm A, DD-MM-YYYY")}
                    </td>
                    <td className="review_table_data">
                      <button
                        className="custom_button"
                        onClick={(e) => handleModalOpen(e, news)}
                      >
                        Edit
                      </button>
                      <button
                        className="custom_button"
                        onClick={(e) => onDeleteNews(e, news)}
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
      <EditNewsModal
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
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (text) => dispatch(setError(text)),
  setSuccess: (text) => dispatch(setSuccess(text)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  updateSite: (data) => dispatch(updateSite(data)),
  fetchSiteData: () => dispatch(fetchSiteData()),
  fetchNewsData: () => dispatch(fetchNewsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNewsScreen);
