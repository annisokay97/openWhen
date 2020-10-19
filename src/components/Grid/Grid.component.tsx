import React from "react";
import photo from "./../../photo.jpg";
import heart from "./../../heart.png";
import { cases } from "./../../cases.json";
import { UseCase } from "./../../types/UseCase";
import Modal from "../Modal/Modal.component";

const Grid = () => {
  const [activeElement, setActiveElement] = React.useState<UseCase | null>(
    null
  );
  const [isHeartVisible, setHeartVisible] = React.useState(false);

  React.useEffect(() => {
    if (isHeartVisible) {
      const timer = setTimeout(() => {
        setHeartVisible(false);
      }, 3000);
    }
  }, [isHeartVisible]);

  return (
    <div className="app-content">
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className="photo bg-image"
        onClick={() => setHeartVisible(true)}
      >
        {isHeartVisible && (
          <div
            className="heart"
            style={{ backgroundImage: `url(${heart})` }}
          ></div>
        )}
      </div>
      {(cases as UseCase[]).map((useCase) => (
        <div
          key={useCase.id}
          style={{ backgroundImage: `url(${useCase.image})` }}
          className="card bg-image"
          onClick={() => setActiveElement(useCase)}
        >
          <div className="card-title">{useCase.name}</div>
        </div>
      ))}
      <Modal
        useCase={activeElement}
        closeModal={() => setActiveElement(null)}
      />
    </div>
  );
};

export default Grid;
