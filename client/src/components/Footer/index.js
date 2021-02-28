import React, { useState } from "react";
import "./footerstyle.css";
import API from "../../utils/API";

// const {loggedIn, setLoggedIn } = useState();
const loggedIn = API.checkCurrentUser().then((req, res) => {
  console.log("hello");
  if (true) {
    console.log("Logged in");
  } else {
    console.log("Not logged In");
  }
});

function Footer() {
  return (
    <footer className="footer">
      KidTastic Inc ©️
      {loggedIn ? (
        <h1>You are currently logged in</h1>
      ) : (
        <h1>You are currently not logged in</h1>
      )}
      <span></span>
    </footer>
  );
}

export default Footer;
