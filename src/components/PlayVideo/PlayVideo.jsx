import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { assets } from "../../assets/assets";
import { API_KEY, numbConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url =
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(()=>{
    fetchVideoData();
  },[videoId])

  return (
    <div className="play-video">
      {/* <video src={assets.video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?numbConverter(apiData.statistics.viewCount):"Placeholder"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"placeholder"}</p>
        <div>
          <span>
            <img src={assets.like} alt="" /> {apiData?numbConverter(apiData.statistics.likeCount):"placeholder"}
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
        <p>{apiData?apiData.snippet.description:"Placeholder"}</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <div className="comment-description">
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities, consisting od interconnected networks
              using standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>244</span>
              <img src={assets.dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <div className="comment-description">
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities, consisting od interconnected networks
              using standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>244</span>
              <img src={assets.dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={assets.user_profile} alt="" />
          <div className="comment-description">
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities, consisting od interconnected networks
              using standardized communication protocols.
            </p>
            <div className="comment-action">
              <img src={assets.like} alt="" />
              <span>244</span>
              <img src={assets.dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
