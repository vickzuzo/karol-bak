import React from "react";
import { ViewImageModal } from "..";

const GalleryItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className="gallery_item_container"
        key={props.index}
        onClick={openModal}
      >
        <img src={props.data.image} alt="gallery_image" />
        <p className="gallery_item_title">{props.data.title}</p>
        <p className="gallery_item_desc">{props.data.description}</p>
      </div>
      <ViewImageModal
        image={props.data.image}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
};

export default GalleryItem;
