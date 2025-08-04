import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { assets } from "../../assets/assets";
import { API_KEY, numbConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentDetails_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);

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
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? numbConverter(apiData.statistics.viewCount)
            : "Placeholder"}{" "}
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "placeholder"}
        </p>
        <div>
          <span>
            <img src={assets.like} alt="" />{" "}
            {apiData
              ? numbConverter(apiData.statistics.likeCount)
              : "placeholder"}
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? numbConverter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Placeholder"}
        </p>
        <hr />
        <h4>
          {apiData ? numbConverter(apiData.statistics.commentCount) : 1}{" "}
          Comments
        </h4>

        {/* Array.isarray is to ensure that the commentData is NOT null, since there is an awaite time */}
        {Array.isArray(commentData) &&
          commentData.map((item, index) => {
            const eachComment = item.snippet.topLevelComment.snippet;

            return (
              <div className="comment">
                <img src={eachComment.authorProfileImageUrl} alt="" />
                <div className="comment-description">
                  <h3>
                    {eachComment.authorDisplayName} <span>1 day ago</span>
                  </h3>
                  <p>{eachComment.textDisplay}</p>
                  <div className="comment-action">
                    <img src={assets.like} alt="" />
                    <span>{numbConverter(eachComment.likeCount)}</span>
                    <img src={assets.dislike} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlayVideo;
