"use strict";

const express = require("express");
const router = express.Router();  // 대소문자 주의

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home)
router.get("/login", ctrl.login);

module.exports =router;