"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
function add(req, res, next) {
    res.send(`${req.params.num1} + ${req.params.num2} = ${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
}
function generateNumber(req, res, next) {
    var randomNumber = Math.ceil(Math.random() * 50);
    res.send(`Random whole number between 1 and 50 : ${randomNumber}`);
}
router.get('/add/:num1/:num2', add);
router.get('/random', generateNumber);
exports.default = router;
