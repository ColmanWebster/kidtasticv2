const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  Children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child",
    },
  ],
});

UserSchema.methods.isPasswordValid = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre("save", async function (doc) {
  const hashedPW = await bcrypt.hash(doc.password);
  return { ...doc, password: hashedPW };
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
