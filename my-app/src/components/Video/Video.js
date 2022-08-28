import React, { useState } from "react";
import "./Video.css";
const Video = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/b1t41Q3xRM8");
  const [onChangeLink, setOnChnageLink] = useState();

  const onBtnClick = () => {
    const videoID = youtube_parser(onChangeLink);
    setLink(`https://www.youtube.com/embed/${videoID}`);
  };

  function youtube_parser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  
  return (
    <div className="video widgets">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <input onChange={(e) => setOnChnageLink(e.target.value)}></input>
      <button onClick={onBtnClick}>search</button>
    </div>
  );
};

export default Video;

