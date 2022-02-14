import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import apiClient from "../../query/api";
import { Input } from "..";
import {
  setError,
  setSuccess,
  startLoading,
  stopLoading,
  updateSite,
  fetchSiteData,
  fetchNewsData,
} from "../../state/actions";
import { connect } from "react-redux";

const EditNewsModal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState(null);

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setSelectedImages([...files]);
    }
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleContentChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  useEffect(() => {
    props.fetchNewsData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("content", content);
      formdata.append("id", props.data._id);
      selectedImages.forEach((image) => {
        formdata.append("images", image);
      });

      await apiClient.post("/api/news/edit_news", formdata);
      props.setSuccess("News Updated Successfully");
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

  return (
    <Modal
      isOpen={props.modalIsOpen}
      ariaHideApp={false}
      onRequestClose={props.closeModal}
      className="modal_container"
      contentLabel="Edit Product Modal"
    >
      <div className="modal_content">
        <div className="modal_title">Edit news: {props.data.title}</div>
        <form>
          <Input
            type="text"
            onChange={handleTitleChange}
            value={title}
            title="news Title"
          />
          <Input
            type="text"
            onChange={handleContentChange}
            value={content}
            title="news Content"
          />
          <Input
            onChange={handleImageChange}
            type="file"
            multiple
            title="news Images (can select multiple)"
          />
          {/* <div className="add_product_images_preview_container">
            <div className="add_product_images_preview_container">
              {selectedImages && (
                <img
                  src={URL.createObjectURL(selectedImages)}
                  alt="product_preview"
                />
              )}
            </div>
          </div> */}
        </form>
        <div className="button_flex_group">
          <button className="button" onClick={props.closeModal}>
            close
          </button>
          <button className="button" onClick={onSubmit}>
            {props.site.loading ? (
              <div className="auth_input_loader" />
            ) : (
              "UPDATE NEWS"
            )}
          </button>
        </div>
      </div>
    </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsModal);
