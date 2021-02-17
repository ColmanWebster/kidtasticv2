import axios from "axios";

export default {
  // Saves a post to the database
  saveUser: function (postData) {
    return axios.post("/api/signup", postData);
  },
};
