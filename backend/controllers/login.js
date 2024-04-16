const usersDB = {
  users: require("../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Handle login logic with db
 * @param {object} request
 * @param {object} response
 * @returns String
 */

const handleLogin = async (request, response) => {
  const { username, password } = request.body;
  if (!username.trim() || !password.trim()) {
    return response
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  const foundUser = usersDB.users.find(
    (person) => person.username === username
  );

  if (!foundUser) {
    return response
      .status(401)
      .json({ message: `No user ${username} was found!` }); //Unauthorized
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match)
    return response.status(400).json({ message: "Password is incorect" });

  if (match) {
    const accessToken = jwt.sign(
      { UserInfo: { username: foundUser.username } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );

    response.json({ accessToken });
  } else {
    response.sendStatus(401);
  }
};

module.exports = handleLogin;
