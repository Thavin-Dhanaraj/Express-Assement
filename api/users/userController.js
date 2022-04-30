const Users = [
  { name: "sam", age: 20 },
  { name: "John", age: 25 },
  { name: "Jim", age: 33 },
  { name: "Marc", age: 45 },
  { name: "San", age: 28 },
  { name: "Mary", age: 38 },
  { name: "Susan", age: 52 },
  { name: "Tony", age: 22 },
  { name: "Rock", age: 20 }
];

exports.get_users = async function (req, res) {
  try {
    res.json(Users).end();
  } catch (err) {
    console.error("Error in Create Customer API ", err);
    res.sendStatus(500);
  }
};

exports.get_user = async function (req, res) {
  try {
    var userObj = Users.filter((user) => user.name === req.params.userName);
    res.json(userObj).end();
  } catch (err) {
    console.error("Error in Create Customer API ", err);
    res.sendStatus(500);
  }
};
