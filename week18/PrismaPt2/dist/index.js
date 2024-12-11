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
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dotenv_1.config)();
const client = new client_1.PrismaClient();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userSignSchema = zod_1.z.object({
            username: zod_1.z.string(),
            password: zod_1.z.string().min(8)
        });
        const validData = userSignSchema.parse(req.body);
        const { username, password } = validData;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield client.user.create({
            data: {
                username: username,
                password: hashedPassword
            },
        });
        res.json({
            message: "SignUp Successfull"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error While Signing Up"
        });
    }
}));
app.post("/singin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield client.user.findFirst({
            where: {
                username: username,
                password: hashedPassword
            }
        });
        res.json({
            message: "Signin Successfull"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error Occured"
        });
    }
}));
app.post("/todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const done = req.body.done;
        const userId = req.body.userId;
        yield client.todo.create({
            data: {
                title: title,
                description: description,
                done: done,
                userId: userId
            }
        });
        res.json({
            message: "Todo Created Successfully"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error While Creating Todo"
        });
    }
}));
app.listen(3000, () => {
    console.log("Server Started At Port 3000");
});
