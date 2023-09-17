import React, { useState } from "react";
// className = "video";

const VideoComponent = ({ video, onRemove }) => {
  const [votes, setVotes] = useState(video.rating);

  function handleUpVotes() {
    setVotes(votes + 1);
  }
  function handleDownVotes() {
    setVotes(votes - 1);
  }

  return (
    <>
      <div className="video-card">
        <h4 className="text-center">{video.title}</h4>
        <div className="video-player-container">
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/${video.id}"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p>Votes {votes}</p>

        <button className="btn btn-outline-dark" onClick={handleUpVotes}>
          Like
        </button>
        <button className="btn btn-outline-dark" onClick={handleDownVotes}>
          Dislike
        </button>

        <button
          className="btn btn-outline-danger"
          onClick={() => onRemove(video.id)}
        >
          Remove Video
        </button>
      </div>
    </>
  );
};

export default VideoComponent;
