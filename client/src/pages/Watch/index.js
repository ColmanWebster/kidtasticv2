import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VideoThumb from "../../components/VideoThumb";
import LetsWatchCard from "../../components/WatchCards/LetsWatchCard";
import Carousel from "../../components/Carousel";
import Hidden from "@material-ui/core/Hidden";
import "./watchstyler.css";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
const bye = document.getElementById("hi");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
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
  paperr: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#202124",
  },
  intropapers: {
    background: "#c1c2bc",
    marginRight: "10px",
  },
  image: {
    marginRight: "10px",
  },
  plz: {
    marginTop: "17px",
  },
}));
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.4,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};
const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};
export default function Watch() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={12}>
                <h1 className={classes.centerTexts1}>
                  Welcome to the Watch Page!
                </h1>
                <h3 className={classes.centerTexts2}>
                  Here you will find handpicked, unsolicited videos, kid-quality
                  videos! We have picked over 50 hours to enjoy!{" "}
                </h3>
                <h3 className={classes.centerTexts2}>
                  We're noticing sometimes video's aren't playing. This usually
                  means the video has been taken down by YouTube ┐(￣～￣)┌
                </h3>
              </Grid>
              <Hidden only={["md", "sm"]}>
                <Grid item lg={1} md={1}></Grid>
              </Hidden>
              <Hidden only={"xs"}>
                <Grid item lg={5} md={6} sm={6} xs={12}>
                  <Paper className={classes.plz}>
                    <Carousel />
                  </Paper>
                </Grid>
              </Hidden>
              <Hidden only={["sm", "xs"]}>
                <Grid item lg={1}></Grid>
              </Hidden>
              <Grid item lg={4} md={5} sm={6}>
                <Paper className={classes.intropapers} xs={2}>
                  <h1>Instructions & Details:</h1>
                  <p>
                    <b>
                      Welcome to the Watch Page, scroll down to choose from a
                      wide variety of shows. Once chosen, sit back and relax!
                      That's it!
                    </b>
                  </p>
                  <p>
                    <b>
                      We have disabled all in-video clicking for all videos and
                      we have added in our own buttons instead to ensure safety.
                    </b>
                  </p>
                </Paper>
                <Paper className={classes.image}>
                  <img
                    src="./assets/images/eyesk.png"
                    alt="eyes"
                    className="md"
                  />
                  <Hidden only={["sm", "md", "lg", "xl"]}>
                    <img
                      src="./assets/thumbs/eyesg.jpg"
                      alt="eyes"
                      className="md"
                    />
                    <img
                      src="./assets/thumbs/eyesp.jpg"
                      alt="eyes"
                      className="md"
                    />
                  </Hidden>
                </Paper>
                <Paper className={classes.intropapers}>
                  <h1 id="hi" className="fade">
                    Disclaimer:
                  </h1>
                  <p>
                    <b>
                      We do not own any of these videos. These videos are
                      uploaded via YouTube from many different accounts. We go
                      through these videos and find the best ones and share it
                      so you can enjoy. If you have any questions, comments,
                      concerns, or would like to suggest a video please refer
                      here.
                    </b>
                  </p>
                </Paper>
                {/* <button
            onClick={() => {
              // bye.classList.remove("blah");
              // bye.classList.add("fade");
              // return;
            }}
          >
            Show
          </button> */}
              </Grid>
              <Grid item md={1}></Grid>
              {/* <Grid item lg={6}>
          <Carousel />
        </Grid> */}
              <Grid item xs={12}>
                <Paper className={classes.paperr}>
                  <h1>
                    <LetsWatchCard />
                  </h1>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <article className={classes.paper}>
                  <VideoThumb id="FskTlUZyF_A" src="./assets/thumbs/poke.jpg" />
                </article>
              </Grid>
              <Grid item xs={6}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="NQy4MVp1kgw"
                    src="./assets/thumbs/masha.png"
                  />
                </article>
              </Grid>
              <Grid item item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="TcQTUWRW1mg"
                    src="./assets/thumbs/spongebob.jpeg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="bLnwLdcshhE"
                    src="./assets/thumbs/craig.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={4} md={4}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="cqyziA30whE"
                    src="./assets/thumbs/tom.jpg"
                    className="md"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="rlK_hlvtNyM"
                    src="./assets/thumbs/hero.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="kZ-IOh9-f90"
                    src="./assets/thumbs/phineas.jpg"
                    className="sm"
                  />
                </article>
              </Grid>

              <Grid item xs={6} lg={4} md={4}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="VBKgPmS5Fyw"
                    src="./assets/thumbs/mickey.jpg"
                    className="md"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="1MaE4p-LEKI"
                    src="./assets/thumbs/molang.jpg"
                    className="md"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="5vdgrKdHKc4"
                    src="./assets/thumbs/paw.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="2qQ5YkH8JtA"
                    src="./assets/thumbs/oddbod.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={4} md={4}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="2ot9eV9DybI"
                    src="./assets/thumbs/yugi.jpg"
                    className="lg-height"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="ksKdx4Eg7W0"
                    src="./assets/thumbs/beyblade.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="z93qRyEY_wQ"
                    src="./assets/thumbs/pink.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="z93qRyEY_wQ"
                    src="./assets/thumbs/ladybugg.jpg"
                    className="md-half"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="Buf-pfD7Qa4"
                    src="./assets/thumbs/booba.jpg"
                    className="md-half"
                  />
                </article>
              </Grid>
              <Grid item xs={2} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="cngoFhdMN00"
                    src="./assets/thumbs/cailou.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={2} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="CvT8Y39hFy4"
                    src="./assets/thumbs/max.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={8} md={8}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="4nc1V3R_nko"
                    src="./assets/thumbs/nemo.jpeg"
                    className="md-hori-8"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="C5kR-exHmr4"
                    src="./assets/thumbs/bears.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="jyC8DPWZVWQ"
                    src="./assets/thumbs/gum.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={4} md={4}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="FikdX6527OI"
                    src="./assets/thumbs/yugigx.jpg"
                    className="lg-height"
                  />
                </article>
              </Grid>
              <Grid item xs={2} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="XDc6Kss5--c"
                    src="./assets/thumbs/dbz.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="LCUA25jz5P4"
                    src="./assets/thumbs/cocomelon.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="705vTy4lNuI"
                    src="./assets/thumbs/teentitan.jpg"
                    className="lg-height"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="OM6xvpzqCUA"
                    src="./assets/thumbs/looney.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="LCUA25jz5P4"
                    src="./assets/thumbs/cocomelon.jpg"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item xs={6} lg={2} md={2}>
                <article className={classes.paper}>
                  <VideoThumb
                    id="XFeIqtFwWec"
                    src="./assets/thumbs/vexed.jpg"
                    className="sm"
                  />
                </article>
                <article className={classes.paper}>
                  <VideoThumb
                    id="VIXPn4Rb110"
                    src="./assets/thumbs/supa.png"
                    className="sm"
                  />
                </article>
              </Grid>
              <Grid item lg={8} md={8}>
                <Paper>
                  <h1>More coming soon...</h1>
                </Paper>
              </Grid>
              {/* <Grid item xs={3} lg={2}>
          <article className={classes.paper}>
            <VideoThumb
              id="83M5eRBW0LY"
              src="./assets/thumbs/yugigx.jpg"
              className="sm"
            />
          </article>
        </Grid> */}
            </Grid>
          </div>
        </motion.div>
      ) : (
        <Loader />
      )}
    </>
  );
}
