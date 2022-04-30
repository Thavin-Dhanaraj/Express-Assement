module.exports = function (app) {
  var user = require("./userController");

  // Users Routes
  app.route("/users").get(user.get_users);

  // Users Routes
  app.route("/user/:userName").get(user.get_user);
};
