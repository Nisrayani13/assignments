"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const todoRouter = express_1.default.Router();
todoRouter.post("/put", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, todos } = req.body;
        todos.forEach((todo) => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma.todo.create({
                data: {
                    title: todo.title,
                    about: todo.about,
                    userId: userId,
                },
            });
        }));
        return res.json({
            msg: "todos got added successfully!!",
        });
    }
    catch (err) {
        console.log(err);
        return res.json(err);
    }
}));
todoRouter.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: req.body.userId
            }
        });
        return res.json(todos);
    }
    catch (err) {
        return res.json(err);
    }
}));
exports.default = todoRouter;
