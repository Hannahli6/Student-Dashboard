import React, { useState } from "react";
import "./Video.css";
const Video = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/6o7b9yyhH7k");
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
      <div className="video-paste-link">
        <input
          onChange={(e) => setOnChnageLink(e.target.value)}
          placeholder="Enter the Youtube URL"
        ></input>
        <button onClick={onBtnClick}>search</button>
      </div>
    </div>
  );
};

export default Video;
