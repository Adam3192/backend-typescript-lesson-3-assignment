"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const math_1 = __importDefault(require("./routes/math"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', index_1.default);
app.use('/math', math_1.default);
app.use((req, res, next) => {
    res.status(404).sendFile(path_1.default.join(__dirname, 'views', 'not-found.html'));
});
app.listen(3000);
