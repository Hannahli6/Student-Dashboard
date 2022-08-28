import React, { useState } from 'react';
import "./Video.css";
const Video = () => {
  const [link, setOnChangeLink] =  useState("https://www.youtube.com/embed/b-HZ1SZPaQw");
  // const [link, setLink] = useState()

  const onBtnClick  = () =>{
    console.log(link)
  }

  return (
    <div className="video widgets">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="340px"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <input onChange={(e)=> setOnChangeLink(e.target.value)}></input>
      <button onClick={onBtnClick}>search</button>
    </div>
  );
};

export default Video;
// https://youtu.be/b1t41Q3xRM8