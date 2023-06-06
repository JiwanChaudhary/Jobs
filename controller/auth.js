const User = require("../models/Users");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError("Please provide all fields");
  // }
  // const user = await User.create({ ...req.body });
  // console.log(user);
  // res.status(StatusCodes.CREATED).json({ user });
  // const { name, email, password } = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...req.body });
  // const token = jwt.sign({ UserID: user._id, name: user.name }, "jwtSecret", {
  //   expiresIn: "30d",
  // });
  // res
  //   .status(StatusCodes.CREATED)
  //   .json({ user: { name: user.getName() }, token });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send("login User");
};

module.exports = { register, login };
