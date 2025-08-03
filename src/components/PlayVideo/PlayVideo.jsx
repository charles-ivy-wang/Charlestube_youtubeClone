import React from "react";
import "./PlayVideo.css";
import { assets } from "../../assets/assets";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={assets.video} controls autoPlay muted></video>
      <h3>Best Youtube Channel to Learn Web Developement</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={assets.like} alt="" /> 125
          </span>
          <span>
            <img src={assets.dislike} alt="" /> 2
          </span>
          <span>
            <img src={assets.share} alt="" /> Share
          </span>
          <span>
            <img src={assets.save} alt="" /> Save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={assets.jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web developement</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <h3>
            Jack Nicholson <span>1 day ago</span>
          </h3>
          <p>A global computer network providing a variety of information and communication facilities, consisting od interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
            <img src={assets.like} alt="" />
            <span>244</span>
            <img src={assets.dislike} alt="" />
          </div>
        </div>
        
        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <h3>
            Jack Nicholson <span>1 day ago</span>
          </h3>
          <p>A global computer network providing a variety of information and communication facilities, consisting od interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
            <img src={assets.like} alt="" />
            <span>244</span>
            <img src={assets.dislike} alt="" />
          </div>
        </div>

        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <h3>
            Jack Nicholson <span>1 day ago</span>
          </h3>
          <p>A global computer network providing a variety of information and communication facilities, consisting od interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
            <img src={assets.like} alt="" />
            <span>244</span>
            <img src={assets.dislike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
