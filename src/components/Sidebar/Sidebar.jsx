import React from 'react'
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sortcut-links">
        <div className="side-link">
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>

        <div className="side-link">
          <img src={assets.game_icon} alt="" />
          <p>Gaming</p>
        </div>

        <div className="side-link">
          <img src={assets.automobiles} alt="" />
          <p>Automobiles</p>
        </div>

        <div className="side-link">
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>

        <div className="side-link">
          <img src={assets.entertainment} alt="" />
          <p>Entertainment</p>
        </div>

        <div className="side-link">
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>

        <div className="side-link">
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>

        <div className="side-link">
          <img src={assets.blogs} alt="" />
          <p>Blogs</p>
        </div>

        <div className="side-link">
          <img src={assets.news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={assets.jack} alt="" />
          <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <img src={assets.simon} alt="" />
          <p>Mr.Beast</p>
        </div>

        <div className="side-link">
          <img src={assets.tom} alt="" />
          <p>Justin Bieber</p>
        </div>

        <div className="side-link">
          <img src={assets.megan} alt="" />
          <p>5-minute Crafts</p>
        </div>

        <div className="side-link">
          <img src={assets.cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar  