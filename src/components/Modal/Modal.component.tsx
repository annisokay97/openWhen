import React from "react";
import modal from "./../../modal.png";
import { UseCase } from "../../types/UseCase";

const Modal = ({
  useCase,
  closeModal,
}: {
  useCase: UseCase | null;
  closeModal: () => void;
}) => {
  return (
    <>
      <div
        className={`overlay ${useCase ? "overlay-opened" : "overlay-closed"}`}
        onClick={closeModal}
      />
      <div
        style={{ backgroundImage: `url(${modal})` }}
        className={`modal ${useCase ? "modal-opened" : "modal-closed"}`}
      >
        {useCase && (
          <div className="modal-wrapper">
            <h1 className="modal-title">{useCase.name} ♡</h1>
            <div className="modal-content">
              {useCase.content.type === "link" && (
                <a
                  target="_blank"
                  className="modal-link"
                  href={useCase.content.link}
                >
                  {useCase.content.title}
                </a>
              )}

              {useCase.content.type === "text" && (
                <h1 className="modal-text">{useCase.content.title}</h1>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
