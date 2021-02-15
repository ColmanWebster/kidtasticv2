import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./homestyles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>
              {" "}
              <img
                src="./assets/circular/clifford.jpg"
                alt="clifford!"
                className="circularImg"
              ></img>
              <img
                src="./assets/circular/booba.jpg"
                alt="clifford!"
                className="circularImg"
              ></img>
              <img
                src="./assets/circular/sophia2.png"
                alt="clifford!"
                className="circularImg"
              ></img>
              KidTastic
            </h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h4>
              Welcome to Kidtastic 2.0! We have successfully migrated to better
              and faster servers for all your daily activities on here. Our team
              has been working long and hard from scratch to deliver un-matched,
              top notch quality. The Watch Page has increased in videos and
              content quality, Over 50 new and more awesome than ever videos
              have been added, so get your popcorn and drinks ready!
            </h4>
            <iframe
              src="https://giphy.com/embed/Cn44PUsTVimwBAtIRx"
              width="480"
              height="270"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p></p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            We will continue to deliver great quality to our users!
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/ladybug.png"
              alt="Miraculous Laddybug is back!"
              className="frontPagePics"
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/Obi.png"
              alt="Master Obi Wan in the building"
              className="frontPagePics"
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {" "}
            <img
              src="./assets/images/korra.webp"
              alt="Avatar: The Legend of Korra"
              className="frontPagePics"
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
