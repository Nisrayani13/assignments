"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const setup_1 = __importDefault(require("./setup"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
const app = (0, express_1.default)();
const port = 3000;
(0, setup_1.default)();
app.use(express_1.default.json());
app.use("/user", userRouter_1.default);
app.use("/todo", todoRouter_1.default);
app.listen(port, () => {
    console.log("Server listening on port:" + port);
});
