import "./comp-style.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import iconclosed from "./assets/shared/icon-close.svg";
import iconhamburger from "./assets/shared/icon-hamburger.svg";
import iconlogo from "./assets/shared/logo.svg";
import destinationPageImg from "./assets/destination/background-destination-desktop.jpg";
import crewPageImg from "./assets/crew/background-crew-desktop.jpg";
import HomePageImg from "./assets/home/background-home-desktop.jpg";
import TechnologyPageImg from "./assets/technology/background-technology-desktop.jpg";
import { useState,useRef,useEffect } from "react";

export const Navigation = ({ changeImg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const ref =useRef(null);// create here statte that i press outside div menu is closed
 

  useEffect(()=>
  {
    function handleClickOutside(event)
    {
      if(ref.current&&!ref.current.contains(event.target)||isMobile!=true)//here sth to protect overtime 
      {
        console.log("clicket outside" )
        console.log("what is: " +isMobile)
        setIsMobile(false);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return()=>
    {
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[ref])
 
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
          isMobile ? "navigation-content-mobile" : "navigation-content"}
          ref={ref}
      >
        <Link to="/" onClick={() => changeImg(HomePageImg)}>
          <span>00 </span> Home
        </Link>
        <Link to="/destination" onClick={() => changeImg(destinationPageImg)}>
          <span>01 </span>Destination
        </Link>
        <Link to="/crew" onClick={() => changeImg(crewPageImg)}>
          <span>02 </span>Crew
        </Link>
        <Link to="/technology" onClick={() => changeImg(TechnologyPageImg)}>
          <span>03 </span>Technology
        </Link>
      </div>
      <div className="navigation-hamburger">
        <img
          id="hamburger"
          src={iconhamburger}
          onClick={() => {
            setIsMobile(!isMobile);
            console.log(isMobile);
          }}
        />
      </div>
    </div>
  );
};
