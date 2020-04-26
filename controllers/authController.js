const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create(req.body);

    res.status(200).json({ result: "success", newUser });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAllUser = async (req, res) => {
  try {
    await User.deleteMany();

    res.status(200).json({ result: "success", newUser: "deleted" });
  } catch (error) {
    console.log(error);
  }
};
