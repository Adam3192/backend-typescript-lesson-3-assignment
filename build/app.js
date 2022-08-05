"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import messageRoutes from './routes/messages'
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', index_1.default);
// app.use('/messages', messageRoutes);
// app.use((req: Request, res: Response, next: NextFunction) => {
//  res.sendFile(path.join(__dirname, 'views', 'not-found.html'))
// })
app.listen(3000);
