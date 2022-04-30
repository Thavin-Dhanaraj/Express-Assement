const express = require("express");
const app = express();
const port = 3010;

let api = require("./api");
api.init(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
