// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// // const logout = async () => {
// //   // Make a POST request to destroy the session on the back end
// //   const response = await API.logout("/api/users/logout", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //   });

//   if (response.ok) {
//     // If successfully logged out, redirect to the login page
//     alert("You have logged out, Goodbye from KidTastic!");
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
// };

// export default function MButton() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained" color="primary">
//         Login!
//       </Button>
//     </div>
//   );
// }
