import axios from "axios";

export default {
  // Saves a post to the database
  saveUser: function (postData) {
    return axios.post("/api/signup", postData);
  },

  loginUser: function (loginData) {
    return axios.post("/api/login", loginData);
  },

  checkCurrentUser: () => axios.get("/api/login"),
};
