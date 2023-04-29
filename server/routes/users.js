const express = require("express");
const router = express.Router();
const User = require("../models/Users.js");
bcrypt = require("bcrypt");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "username email").exec();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Cannot find users");
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "username email").exec();
    res.json(user);
  } catch (err) {
    res.status(500).send("Cannot find user by id");
  }
});

router.post("/signup", async (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User saved successfully!",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err: err,
        });
      });
  });
});

router.put("/users/:id", async (req, res) => {
  const name = req.body.username;
  console.log("NAME", name);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: { username: name },
    });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.send({ message: "Unable to update username" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(`${user} deleted`);
    res.send({ message: `${user} deleted` });
  } catch (err) {
    console.log(err);
    res.send({ message: "Unable to delete"});
  }
});

module.exports = router;
