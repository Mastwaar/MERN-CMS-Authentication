const express = require('express');
const route = express.Router();
const authcontrollers = require("../controllers/auth-controllers");
const {signupSchema} = require("../validators/auth-validator");
const {loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate_middlewares");
const authMiddleware = require("../middlewares/auth-middleware");

// route.get("/", (req, res) => {
//     res.status(200).send("ABC");
// });


route.route("/").get(authcontrollers.home);

// route.get('/signup', (req, res) => {
//     res.status(200).send("You are Welcome to the Signup Page by router");
// });

route.route("/register").post(validate(signupSchema),authcontrollers.register);

route.route("/login").post(validate(loginSchema),authcontrollers.login);

route.route("/user").get(authMiddleware,authcontrollers.user);


module.exports = route;