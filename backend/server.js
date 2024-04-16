const express = require("express");
const credentials = require("./middleware/credentials");
const verifyJWT = require("./middleware/verifyJWT");
const cors = require("cors");
const app = express();

app.use(credentials);

app.use(cors(true));
//Built in middleware for json
app.use(express.json());

//Built in middleware to read form data
app.use(express.urlencoded({ extended: false }));

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

app.use(verifyJWT);
app.use("/delete", require("./routes/delete"));

app.listen(3500, () => console.log(`Server running on port ${3500}`));
