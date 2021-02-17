import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VideoThumb from "../../components/VideoThumb";
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoThumb />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoThumb />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
