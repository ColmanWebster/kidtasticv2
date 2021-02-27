const db = require("../models");

module.exports = {
  // getCurrentUser: function (req, res) {
  //   res.json("yay");
  // },

  create: async ({ body: { confirmedPassword, ...body } }, res) => {
    const emailExists = await db.User.findOne({ email: body.email });
    console.log("Confirmed password", confirmedPassword )

    //* check to see if the user al;ready exists 
    if (emailExists) return res.status(400).send("Email already exists.");
    else {

      console.log("Begin eror checking", body) ;

      //* need to check that both passwords have been entered 
      if (!body.password || !confirmedPassword) 
      return res.status(400).send("Password and Confirmed Password must be entered.");
           
      //* Both passwords must be equal  
      const chkPwd = body.password;
      console.log("temp pwd", chkPwd) ;
      // if (chkPwd !== confirmedPassword) 
      // return res.status(400).send("Password and Confirmed Password must be identical."); 

      //* New email address all edits passed - create the user 
      db.User.create(body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },
};
