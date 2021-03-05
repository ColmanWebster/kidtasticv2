import React, { useState } from "react";
import "./footerstyle.css";
import LogoutIcon from "./images/logout/logouticon.png";
import LogoutText from "./images/logout/logouttext.png";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  foot: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  iconz: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const logoutFormHandler = async (event) => {
  API.logoutCurrentUser({});
  alert("Thank you for visiting Kidtastic, come back again soon!");
  document.location.replace("/");
};

const logoutLink = [
  <img
    src={LogoutIcon}
    alt="Login Icon"
    style={{ width: "5vw", height: "4vw" }}
    onClick={logoutFormHandler}
  />,
];

const logoutText = [
  <img
    src={LogoutText}
    alt="Logout text"
    style={{ width: "106px", height: "29px" }}
    onClick={logoutFormHandler}
  />,
];
function Footer({ isLoggedIn }) {
  const classes = useStyles();
  return (
    <footer className="footer">
      KidTastic Inc ©️ 2021 Delivering Smiles Since 2020
      <div className={classes.foot}>
        {isLoggedIn ? (
          <>
            <h1>You are currently logged in</h1>
            <img
              src="./assets/images/greenhood.png"
              alt="green girl"
              className="girl"
            />
            <p>Suhweeeeet</p>
            <div className={classes.iconz}>
              {logoutLink}
              {logoutText}
            </div>
          </>
        ) : (
          <>
            <h1>
              You are currently <em>not</em> logged in :(
            </h1>
            <p>
              <a href="/signup">Click here</a> to make an account
            </p>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
