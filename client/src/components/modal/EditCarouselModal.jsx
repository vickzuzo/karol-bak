import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "..";

const EditCarouselModal = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const { files } = e.target;
    setSelectedImage(files[0]);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setPrice(value);
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
        <div className="modal_title">Edit Carousel: {props.data.title}</div>
        <form>
          <Input
            type="text"
            onChange={handleTitleChange}
            value={title}
            title="Carousel Title"
          />
          <Input
            type="text"
            onChange={handleDescriptionChange}
            value={description}
            title="Carousel Description"
          />
          <Input
            type="text"
            onChange={handlePriceChange}
            value={price}
            title="Carousel Price"
          />
          <Input
            onChange={handleImageChange}
            type="file"
            title="Carousel Images (can select multiple)"
          />
          <div className="add_product_images_preview_container">
            {/* <img
              src={URL.createObjectURL(selectedImage)}
              alt="product_preview"
            /> */}
          </div>
        </form>
        <div className="button_flex_group">
          <button className="button" onClick={props.closeModal}>
            close
          </button>
          <button className="button" onClick={props.closeModal}>
            UPDATE
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditCarouselModal;
