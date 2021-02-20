// const Joi = require('joi');

// const schema = Joi.object({

//     name: Joi.string()
//         .alphanum()
//         .min(1)
//         .max(30)
//         .required(),

//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//    confirmedPassword: Joi.ref('password'),

//     access_token: [
//         Joi.string(),
//         Joi.number()
//     ],

//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// })
//     .with('username', 'name')
//     .xor('password', 'access_token')
//     .with('password', 'repeat_password');

// schema.validate({ username: username, birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.checkPassword = function (password) {
  //.compare returns promise .compareSync is synchrously //
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// const { Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
// const sequelize = require("../config/connection");

// class User extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isChild: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (newUserData) => {
//         newUserData.password = await bcrypt.hash(newUserData.password, 15);
//         return newUserData;
//       },
//       beforeUpdate: async (updatedUserData) => {
//         updatedUserData.password = await bcrypt.hash(
//           updatedUserData.password,
//           15
//         );
//         return updatedUserData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     modelName: "user",
//   }
// );

// module.exports = User;
