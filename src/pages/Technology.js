import "./Technology.css";
import Vehicle from "./assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "./assets/technology/image-spaceport-portrait.jpg";
import Capsule from "./assets/technology/image-space-capsule-portrait.jpg";
import { useState, useCallback } from "react";

export const Technology = (technology) => {
  const technologyContent = technology.technologyData;
  const [technologyData, setTechnologyData] = useState(technologyContent[0]);
  const [technologyImg, setTechnologyImg] = useState(Vehicle);
  const [buttonNumber, setButtonNumber] = useState(1);
  const changeTechnology = (data, img, btnNumber) => {
    setTechnologyData(data);
    setTechnologyImg(img);
    setButtonNumber(btnNumber);
  };
  return (
    <div className="technology">
      <p className="hello-page-p">
        <span className="number-page-span">03</span> Space Launch 101
      </p>
      <section className="main-technology-container">
        <div className="buttons-technology-switch">
          <button
            className={
              buttonNumber === 1
                ? "switcher-technology active"
                : " switcher-technology"
            }
            onClick={() => changeTechnology(technologyContent[0], Vehicle, 1)}
          >
            1
          </button>
          <button
            className={
              buttonNumber === 2
                ? "switcher-technology active"
                : " switcher-technology"
            }
            onClick={(e) =>
              changeTechnology(technologyContent[1], Spaceport, 2)
            }
          >
            2
          </button>
          <button
            className={
              buttonNumber === 3
                ? "switcher-technology active"
                : " switcher-technology"
            }
            onClick={() => changeTechnology(technologyContent[2], Capsule, 3)}
          >
            3
          </button>
        </div>
        <div className="text-technology">
          <p id="title-technology">The terminology...</p>
          <h2 id="name-technology">{technologyData.name}</h2>
          <p id="description-technology">{technologyData.description}</p>
        </div>
        <div className="img-technology">
          <img src={technologyImg} alt="Launch vehicle"></img>
          {/* <img src={technologyContent[0].images.portrait} alt="Launch vehicle"></img> why it doesnt work */}
        </div>
      </section>
    </div>
  );
};
