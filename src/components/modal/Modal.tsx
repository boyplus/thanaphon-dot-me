import { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './modal.css'

import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  image: string;
  setShowModal: (x: boolean) => void;
  currentIndex: number;
  setCurrentIndex: (x: number) => void;
  size: number;
  name: string;
  isMobile: boolean;
  width?: number;
  height?: number;
}

const Modal: React.FC<ModalProps> = ({
  image,
  setShowModal,
  currentIndex,
  setCurrentIndex,
  size,
  name,
  isMobile,
  width,
  height
}) => {
  function downHandler({ keyCode }: any) {
    if (keyCode === 27) {
      setShowModal(false);
    }
    if (keyCode === 37 && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (keyCode === 39 && currentIndex !== size - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });
  return (
    <Fragment>
      <div className="modal-container" onClick={() => setShowModal(false)}>
        <div className="content">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="icon hover" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="wrapper">
            <div className="icon" onClick={(e) => e.stopPropagation()}>
              {currentIndex !== 0 ? (
                <div
                  className="hover"
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              ) : null}
            </div>

            {isMobile ?
              <div className="modal-image-container">
                <img
                  src={`/images/project/${name}/${image}`}
                  alt={name}
                  onClick={(e) => e.stopPropagation()}
                  width={width}
                  height={height}
                >
                </img>
              </div> :
              <div className="modal-image-container">
                <img
                  width="100%"
                  height="100%"
                  src={`/images/project/${name}/${image}`}
                  alt={name}
                  onClick={(e) => e.stopPropagation()}
                >
                </img>
              </div>}

            <div className="icon" onClick={(e) => e.stopPropagation()}>
              {currentIndex !== size - 1 ? (
                <div
                  className="hover"
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              ) : null}
            </div>
          </div>
          {isMobile ?
            <p className="text" style={{ marginTop: '10px' }}>
              Click on the arrow or press left and right to change picture
            </p> :
            <p className="text">
              Click on the arrow or press left and right to change picture
            </p>
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
