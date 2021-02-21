import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./teststyle.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
  },
});
function TestCard({ id }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWidth, setWidth] = useState("80vw");
  const [isHeight, setHeight] = useState("33vw");
  const [volume, setVolume] = useState(0.5);
  const [rating, setRating] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };
  return (
    <div>
      <div style={{ pointerEvents: "none" }} className="overlayBanner">
        <ReactPlayer
          volume={volume}
          width={isWidth}
          height={isHeight}
          className="thePlayer"
          playing={isPlaying}
          controls={false}
          url={"https://www.youtube.com/watch?v=" + id}
        />
      </div>
      <div className="controllers">
        <Button
          style={{ backgroundColor: "#63eb9b", color: "black" }}
          className="controllerBtns"
          variant="contained"
          color="primary"
          onClick={() => {
            if (isWidth && isHeight) {
              setHeight("1000px") && setWidth("1000px");
            }
          }}
        >
          {isWidth ? "FullScreen" : "Normal Mode"}
        </Button>
        <Button
          style={{ backgroundColor: "#63eb9b", color: "black" }}
          className="controllerBtns"
          variant="contained"
          color="primary"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>

        <Button
          style={{ backgroundColor: "#63eb9b", color: "black" }}
          className="controllerBtns"
          variant="contained"
          color="primary"
          onClick={() => setHeight("33vw") && setWidth("88vw")}
        >
          Normal View
        </Button>
        <div className={classes.root}>
          <VolumeDown />
          <Slider
            value={volume}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.1}
          />
          <VolumeUp />
        </div>

        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>
    </div>
  );
}

export default TestCard;
