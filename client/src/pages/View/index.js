import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestCard from "../../components/WatchCards/TestCard";
import { useParams } from "react-router-dom";
import "./viewstyle.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "",
    backgroundColor: "#e8b11a",
  },
  margin: {
    margin: theme.spacing(0),
  },
  font: {
    textAlign: "center",
  },
  vidContainer: {
    marginBottom: "100vw",
  },
}));

export default function Login() {
  const urlParams = useParams();
  console.log(urlParams);

  const classes = useStyles();

  return (
    <div className={classes.vidContainer}>
      <TestCard {...urlParams} />
    </div>
  );
}
