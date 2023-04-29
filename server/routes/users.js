const express = require("express");
const router = express.Router();
const User = require("../models/Users.js");
bcrypt = require("bcrypt")


router.post("/signup", async (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User saved successfully!'
                    });
                }
            ).catch(
                (err) => {
                    res.status(500).json({
                        err: err
                    }
            )

        }
    )
})})


    module.exports = router
