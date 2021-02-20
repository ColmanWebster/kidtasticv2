const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const watchSchema = new Schema({
  id: _id,
});

const WatchModel = mongoose.model("Watch", watchSchema);

module.exports = WatchModel;
