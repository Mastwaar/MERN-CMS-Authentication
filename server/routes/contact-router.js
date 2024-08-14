const express = require('express');
const route = express.Router();
const contactForm = require("../controllers/contact-controller");

route.route("/contact").post(contactForm);


module.exports = route;