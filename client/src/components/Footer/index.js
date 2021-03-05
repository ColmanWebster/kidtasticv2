import React, { useState } from "react";
import "./footerstyle.css";
import API from "../../utils/API";

// const {loggedIn, setLoggedIn } = useState();
// const loggedIn = API.checkCurrentUser().then((req, res) => {
//   console.log("hello from the footer");
//   if (true) {
//     console.log("Logged in from the footer");
//   } else {
//     console.log("Not logged In from the footer");
//   }
// });

function Footer({isLoggedIn}) {
  return (
    <footer className="footer">
      KidTastic Inc ©️
      {isLoggedIn ? (
        <h1>You are currently logged in</h1>
      ) : (
        <h1>You are currently not logged in</h1>
      )}
      <span></span>
    </footer>
  );
}

export default Footer;
