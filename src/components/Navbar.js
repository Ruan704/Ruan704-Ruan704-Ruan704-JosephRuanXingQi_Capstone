import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import PetsIcon from "@mui/icons-material/Pets";
import logos from "../images/logo.png";
import "./NavbarStyles.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>
          {" "}
          <img src={logos} className="App-logo" alt="logo" />
          &nbsp;Protecting Wildlife
        </h1>
      </Link>
      {/* <PetsIcon></PetsIcon> */}
      {/* if our nav-menu is active we show the links. else,going back to normal navmenu */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/JoinUs">JOIN</Link>
        </li>
        <li>
          <Link to="/about">SERVICE</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/AboutGovernment">ABOUT</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        // if its click show the close icon. else show menu icon
        {click ? (
          <CloseIcon size={20} style={{ color: "#fff" }} />
        ) : (
          <MenuIcon size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
