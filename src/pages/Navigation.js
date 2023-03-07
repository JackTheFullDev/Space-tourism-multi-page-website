import "./comp-style.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import iconclosed from "./assets/shared/icon-close.svg";
import iconhamburger from "./assets/shared/icon-hamburger.svg";
import iconlogo from "./assets/shared/logo.svg";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <div>
        <img src={iconlogo} alt="logo-space-tourism" />
      </div>
      <div>
        <hr id="separator"></hr>
      </div>
      <div className="navigation-content">
        <Link to="/">
          <span>00 </span> Home
        </Link>
        <Link to="/destination">
          <span>01 </span>Destination
        </Link>
        <Link to="/crew">
          <span>02 </span>Crew
        </Link>
        <Link to="/">
          <span>03 </span>Technology
        </Link>
      </div>
    </div>
  );
};
