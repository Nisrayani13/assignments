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
const zod_1 = __importDefault(require("zod"));
const prisma = new client_1.PrismaClient();
const userRouter = express_1.default.Router();
const userSignupSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string()
});
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (userSignupSchema.safeParse(req.body).success) {
        try {
            const user = yield prisma.user.create({
                data: {
                    username: req.body.username,
                    password: req.body.password
                }
            });
            return res.json({
                message: "User created successfully",
                user: user
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400);
        }
    }
    return res.json({
        message: "Problem with validation in zod"
    });
}));
exports.default = userRouter;
