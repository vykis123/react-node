const usersDb = {
  users: require("../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const path = require("path");
const fsPromises = require("fs").promises;

const bcrypt = require("bcrypt");

/**
 * Handle delete logic with db
 * @param {object} request
 * @param {object} response
 * @returns Object
 */

const handelRegistration = async function (request, response) {
  const { username, password } = request.body;

  if (!username.trim() || !password.trim())
    return response
      .status(400)
      .json({ message: "Username and password are required!" });

  const dublicate = usersDb.users.find((user) => user.username === username);

  if (dublicate)
    return response
      .status(409)
      .json({ message: `User with this username ${username} already exists!` });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPassword,
    };

    usersDb.setUsers([...usersDb.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "data", "users.json"),
      JSON.stringify(usersDb.users)
    );

    response.status(201).json({ message: `New user ${username} created!` });
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = handelRegistration;
