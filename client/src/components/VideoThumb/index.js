import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./videostyle.css";
const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

export default function VideoThumb({
  id = "8SJSS_CB6jE",
  src,
  className = "wild",
}) {
  const classes = useStyles();

  return (
    <div>
      <a href={`/watch/${id}`}>
        <img
          className={className}
          id="8SJSS_CB6jE"
          onClick={() => {
            console.log("Hello World");
          }}
          src={src}
          alt=""
        />
      </a>
    </div>
  );
}
