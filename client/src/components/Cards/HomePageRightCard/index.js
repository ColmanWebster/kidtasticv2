import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f5b869",
    marginRight: "3vw",
    marginLeft: "1vw",
  },
}));
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
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
  duration: 0.2,
};

const pageStyle = {
  position: "absolute",
};
const HomePageLeftCard = () => {
  const classes = useStyles();
  return (
    <Paper item xs={12} className={classes.paper}>
      <h1>Not a user yet?</h1>
      <h3>New accounts are limited to the first 100 people.</h3>
      <p>Grab a parent or signup yourself!</p>
      <p>100% free and no credit card required.</p>
      <br></br>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Button variant="contained" color="primary" href="/signup">
          Signup
        </Button>
      </motion.div>
    </Paper>
  );
};

export default HomePageLeftCard;
