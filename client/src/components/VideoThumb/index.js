import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

export default function VideoThumb({ id = "8SJSS_CB6jE" }) {
  const classes = useStyles();

  return (
    <div>
      <a href={`/watch/${id}`}>
        <img
          id="8SJSS_CB6jE"
          onClick={() => {
            console.log("Hello World");
          }}
          className={classes.image}
          src="./assets/thumbs/poke.jpg"
          alt=""
        />
      </a>
    </div>
  );
}
