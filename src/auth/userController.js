const User = require("./userModel");

async function register(req, res) {
  try {
    const user = new User({ ...req.body, verified: false });
    await user.save();
    res.send("Registered successfully");
  } catch (error) {
    res.status(500).json(error);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
      verified: true,
    });

    if (user) {
      res.send(user);
    } else {
      res.status(500).json({ message: "Login Failed" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  register,
  login,
};
