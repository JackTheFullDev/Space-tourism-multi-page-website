import "./comp-style.css";
import { Link } from "react-router-dom";
import iconhamburger from "./assets/shared/icon-hamburger.svg";
import iconlogo from "./assets/shared/logo.svg";
import destinationPageImg from "./assets/destination/background-destination-desktop.jpg";
import crewPageImg from "./assets/crew/background-crew-desktop.jpg";
import HomePageImg from "./assets/home/background-home-desktop.jpg";
import TechnologyPageImg from "./assets/technology/background-technology-desktop.jpg";
import { useState, useEffect } from "react";

export const Navigation = ({ changeImg }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [navNumber, setNavNumber] = useState(1);
  const handleNavNumber = (number) => {
    setNavNumber(number);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="nav-container">
      <div>
        <img src={iconlogo} alt="logo-space-tourism" />
      </div>
      <div>
        <hr id="separator"></hr>
      </div>
      <div
        className={
          isMobile ? "navigation-content" : "navigation-content-mobile"
        }
      >
        <Link
          to="/"
          onClick={() => {
            changeImg(HomePageImg);
            handleNavNumber(1);
          }}
          className={navNumber === 1 ? "active" : null}
        >
          <span>00 </span> Home
        </Link>
        <Link
          to="/destination"
          onClick={() => {
            changeImg(destinationPageImg);
            handleNavNumber(2);
          }}
          className={navNumber === 2 ? "active" : null}
        >
          <span>01 </span>Destination
        </Link>
        <Link
          to="/crew"
          onClick={() => {
            changeImg(crewPageImg);
            handleNavNumber(3);
          }}
          className={navNumber === 3 ? "active" : null}
        >
          <span>02 </span>Crew
        </Link>
        <Link
          to="/technology"
          onClick={() => {
            changeImg(TechnologyPageImg);
            handleNavNumber(4);
          }}
          className={navNumber === 4 ? "active" : null}
        >
          <span>03 </span>Technology
        </Link>
      </div>
      <div className="navigation-hamburger">
        <img
          id="hamburger"
          src={iconhamburger}
          onClick={() => {
            setIsMobile(!isMobile);
          }}
        />
      </div>
    </div>
  );
};
