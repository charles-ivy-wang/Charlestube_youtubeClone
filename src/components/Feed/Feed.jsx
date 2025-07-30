import React from "react";
import "./Feed.css";
import { assets } from "../../assets/assets";

const Feed = () => {
  return (
    <div className="feed">
      <div className="card">
        <img src={assets.thumbnail1} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail2} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail3} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail4} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail5} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail6} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail7} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>

      <div className="card">
        <img src={assets.thumbnail8} alt="" />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
    </div>
  );
};

export default Feed;
