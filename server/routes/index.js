const router = require("express").Router();
const { v4: uuid } = require("uuid");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.session);
  res.json("HELLO");
});

const users = [];

router.post("/api", (req, res) => {
  const { username } = req.body;
  const id = uuid();
  const user = {
    id,
    username,
  };

  users.push(user);
  console.log(users);
  req.session.userId = id;

  res.json(user);
});

module.exports = router;
