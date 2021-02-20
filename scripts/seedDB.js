const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect("mongodb://localhost/kidtastic");

const userSeed = [
  {
    name: "Chad Lew",
    email: "admin@admin.com",
    username: "developer",
    password: "password12345",
    confirmedPassword: "password12345",
  },
  {
    name: "Mark Shelgren",
    email: "admin1@admin.com",
    username: "badass",
    password: "password12345",
    confirmedPassword: "password12345",
  },
  {
    name: "Tim Budkas",
    email: "admin2@admin.com",
    username: "god",
    password: "password12345",
    confirmedPassword: "password12345",
  },
  {
    name: "Colman Webster",
    email: "admin3@admin.com",
    username: "comedian",
    password: "password12345",
    confirmedPassword: "password12345",
  },
  {
    name: "Martin Buenrostro",
    email: "admin4@admin.com",
    username: "data scientist",
    password: "password12345",
    confirmedPassword: "password12345",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
