import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "..";

const EditProductModal = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

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
      // onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      className="modal_container"
      contentLabel="Edit Product Modal"
    >
      <div className="modal_content">
        <div className="modal_title">Edit Product: {props.data.title}</div>
        <form>
          <Input
            type="text"
            onChange={handleTitleChange}
            value={title}
            title="Product Title"
          />
          <Input
            type="text"
            onChange={handleDescriptionChange}
            value={description}
            title="Product Description"
          />
          <Input
            type="text"
            onChange={handlePriceChange}
            value={price}
            title="Product Price"
          />
          <Input
            onChange={handleImageChange}
            type="file"
            multiple
            title="Product Images (can select multiple)"
          />
          <div className="add_product_images_preview_container">
            {selectedImages.length > 0 &&
              selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt="product_preview"
                />
              ))}
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

export default EditProductModal;
