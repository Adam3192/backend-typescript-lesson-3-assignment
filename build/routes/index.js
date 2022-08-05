"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
function welcome(req, res, next) {
    res.send('Hello! Welcome to this site');
}
function greetUser(req, res, next) {
    console.log(req.params);
    res.send(`Hello, ${req.params.name}!`);
}
router.get('/', welcome);
router.get('/greeting/:name', greetUser);
exports.default = router;
