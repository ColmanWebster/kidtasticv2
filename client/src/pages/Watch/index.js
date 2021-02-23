import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VideoThumb from "../../components/VideoThumb";
import LetsWatchCard from "../../components/WatchCards/LetsWatchCard";
import Carousel from "../../components/Carousel";
import "./watchstyler.css";
const bye = document.getElementById("hi");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerTexts1: {
    textAlign: "center",
    marginTop: "40px",
  },
  centerTexts2: {
    textAlign: "center",
  },
  thumbnails: {
    height: "20vw",
    width: "20vw",
  },
}));

export default function Watch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <h1 className={classes.centerTexts1}>Welcome to the Watch Page!</h1>
          <h3 className={classes.centerTexts2}>
            Here you will find handpicked, unsolicited videos, kid-quality
            videos! We have picked over 50 hours to enjoy!{" "}
          </h3>
          <h3 className={classes.centerTexts2}>
            We're noticing sometimes video's aren't playing. This usually means
            the video has been taken down by YouTube ┐(￣～￣)┌
          </h3>
        </Grid>
        <Grid item lg={8}>
          <Paper>
            <Carousel />
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper>
            <h1 id="hi" className="blah">
              Here's the Latest Videos Added
            </h1>
          </Paper>
          <button
            onClick={() => {
              // bye.classList.remove("blah");
              // bye.classList.add("fade");
              // return;
            }}
          >
            Show
          </button>
        </Grid>
        {/* <Grid item lg={6}>
          <Carousel />
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>
              <LetsWatchCard />
            </h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoThumb id="FskTlUZyF_A" src="./assets/thumbs/poke.jpg" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoThumb id="NQy4MVp1kgw" src="./assets/thumbs/masha.png" />
          </Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>
            <VideoThumb
              id="TcQTUWRW1mg"
              src="./assets/thumbs/spongebob.png"
              className="sm"
            />
          </Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
