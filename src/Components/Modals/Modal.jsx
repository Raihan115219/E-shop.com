import React from "react";
import "./Modal.css";

function Modal({ imageInfo, setModalOpen }) {
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    hieght: "550px",
  };

  return (
    <div>
      <div className="modal show fade" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">{imageInfo.name}</h5>
              <button
                type="button"
                className="btn btn-danger "
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="modal-body">
              <img
                src={imageInfo.image}
                alt={imageInfo.name}
                className="img-fluid"
              />
              <h4 className="py-4">{imageInfo.name}</h4>
              <p className="lh-sm">{imageInfo.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
