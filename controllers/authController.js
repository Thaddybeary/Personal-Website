const bcrypt = require("bcryptjs");
const { findUserByUsername } = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).send({ message: "Authentication failed" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.session.user = { id: username, time: Date.now() };
      res.json({ message: "Logged in successfully" });
    } else {
      res.status(401).send({ message: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).send({ message: "Authentication Error" });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          return res.status(500).json({ message: "Could not log out, please try again" });
      }
      res.json({ message: "Logged out successfully" });
  });
};

module.exports = {
  login,
  logout
};
