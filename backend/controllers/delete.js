const usersDB = {
  users: require("../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const path = require("path");
const fsPromises = require("fs").promises;

/**
 * Handle delete logic with db
 * @param {object} body
 * @param {object} response
 * @returns Object
 */

async function deleteHandler({ body }, response) {
  if (!body.username)
    return response.status(400).json({ message: "User name is required!" });

  const user = usersDB.users.find((user) => user.username === body.username);

  if (!user)
    return response
      .status(400)
      .json({ message: `There is no user with ${body.username} username!` });

  const filteredUsers = usersDB.users.filter(
    (emp) => emp.username !== body.username
  );

  usersDB.setUsers([...filteredUsers]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(usersDB.users)
  );

  return response.json({ message: `User ${body.username} has been deleted!` });
}

module.exports = deleteHandler;
