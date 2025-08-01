import React from 'react'
import "./PlayVideo.css"
import { assets } from '../../assets/assets'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={assets.video} controls autoPlay muted></video>
      <h3>Best Youtube Channel to Learn Web Developement</h3>
      <div className='play-video-info'>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span><img src={assets.like} alt="" /> 125</span>
          <span><img src={assets.dislike} alt="" /> 2</span>
          <span><img src={assets.share} alt="" /> Share</span>
          <span><img src={assets.save} alt="" /> Save</span>
        </div>
      </div>

      <hr />

      <div className='publisher'>
        <img src={assets.jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
    
    </div>
  )
}

export default PlayVideo