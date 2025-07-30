import React, { Profiler } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev=>!prev)}
          src={assets.menu}
          alt=""
        />
        <img className="logo" src={assets.logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="searchBar">
          <input type="text" placeholder="Search" />
          <img src={assets.search} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img className="jack" src={assets.jack} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
