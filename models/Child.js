const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

ChildSchema.methods.isPasswordValid = function (password) {
  return bcrypt.compareSync(password, this.password);
};

ChildSchema.pre("save", async function (doc) {
  const hashedPW = await bcrypt.hash(doc.password);
  return { ...doc, password: hashedPW };
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
