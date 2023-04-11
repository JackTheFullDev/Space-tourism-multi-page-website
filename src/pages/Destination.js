import "./Destination.css";
import Moon from "./assets/destination/image-moon.png";
import Europa from "./assets/destination/image-europa.png";
import Titan from "./assets/destination/image-titan.png";
import Mars from "./assets/destination/image-mars.png";
import { useState } from "react";

export const Destination = (destinationData) => {
  const planetData = destinationData.destinationData;
  const [planet, setPlanet] = useState(planetData[0]);
  const [planetImg, setPlanetImg] = useState(Moon);
  const changePlanet = (dataPlanet, imgPlanet) => {
    setPlanet(dataPlanet);
    setPlanetImg(imgPlanet);
  };
  return (
    <div className="destionation">
      <p className="hello-page-p">
        {" "}
        <span className="number-page-span">01</span> Pick your destination
      </p>
      <section className="destionation-container">
        <div className="destionation-left-content">
          <img id="mn" src={planetImg} alt="planet-img" />
        </div>
        <div className="destionation-right-content">
          <ul>
            <a
              onClick={() => {
                changePlanet(planetData[0], Moon);
              }}
            >
              Moon
            </a>
            <a
              onClick={() => {
                changePlanet(planetData[1], Mars);
              }}
            >
              Mars
            </a>
            <a
              onClick={() => {
                changePlanet(planetData[2], Europa);
              }}
            >
              Europa
            </a>
            <a
              onClick={() => {
                changePlanet(planetData[3], Titan);
              }}
            >
              Titan
            </a>
          </ul>
          <div className="planet-info">
            <h1>{planet.name}</h1>
            <p>{planet.description}</p>
            <hr></hr>
            <div className="distance-bottom-content">
              <div>
                <p className="info-p-destination">Avg.Distance</p>
                <p className="info-p-time">{planet.distance}</p>
              </div>
              <div>
                <p className="info-p-destination">Est.travel time</p>
                <p className="info-p-time">{planet.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
