const Users = require("../models/userModel");

exports.createUser = async (res, req, next) => {
  try {
    const newUser = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json({
      status: "sucess",
      data: { user: newUser },
    });

    next();
  } catch (err) {
    console.log(err.message);
  }
};
