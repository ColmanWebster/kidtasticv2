import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
  },
}));

function SkeletonChildrenDemo(props) {
  const classes = useStyles();

  return (
    <div>
      <a href={"/watch/" + { props }}>
        <img
          id={props}
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

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function VideoThumb() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>
  );
}
