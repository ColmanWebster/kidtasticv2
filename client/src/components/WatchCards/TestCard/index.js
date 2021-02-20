import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./teststyle.css";
function TestCard({ id }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <div style={{ pointerEvents: "none" }} className="overlayBanner">
        <ReactPlayer
          volume="0"
          width="1000px"
          height="500px"
          className="thePlayer"
          playing={isPlaying}
          controls={false}
          url={"https://www.youtube.com/watch?v=" + id}
        />
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default TestCard;
