module.exports.init = function (app) {
  console.info("Controller Initialized Succesfully ");
  //importing route
  var routes = require("./users/userRouter");
  //register the route
  routes(app);
};
