import React, {useState} from "react";
import Modal from "react-modal";

const ViewImageModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      ariaHideApp={false}
      onRequestClose={props.closeModal}
      className="modal_container"
      contentLabel="View Image Modal"
    >
      <div className="modal_content">
        <img src={props.image} style={{width: '100%', height: '100%'}} alt={props.image} />
        <div className="button_flex_group">
          <button className="button" onClick={props.closeModal}>
            close
          </button>
          </div>
      </div>
    </Modal>
  );
};

export default ViewImageModal;
