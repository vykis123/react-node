//Here we can specify white list if needed for accepting request

const credentials = (request, response, next) => {
  response.header("Access-Control-Allow-Credentials", true);
  next();
};

module.exports = credentials;
