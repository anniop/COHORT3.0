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
const zod_1 = require("zod");
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const client = new client_1.PrismaClient();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const signupSchema = zod_1.z.object({
            username: zod_1.z.string(),
            password: zod_1.z.string().min(8),
            age: zod_1.z.number().min(18), // Optional: Validates that the age is a number and at least 18
            city: zod_1.z.string()
        });
        const validatedData = signupSchema.parse(req.body); // Validate data
        const { username, password, age, city } = validatedData;
        // Create user in the database
        const user = yield client.user.create({
            data: {
                username: username,
                password: password,
                age: Number(age),
                city: city
            }
        });
        res.json({
            user,
            message: "User Signed Up Successfully"
        });
    }
    catch (e) {
        // Handle validation or database errors
        res.status(400).json({
            message: "An error occurred",
        });
    }
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield client.user.findMany();
        console.log("Database Connected Successfully");
        res.json({
            users
        });
    }
    catch (e) {
        console.log(e);
    }
}));
app.get("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const users = yield client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todo: true
        }
    });
    res.json({
        users
    });
}));
app.listen(3000, () => {
    console.log("Server Started on port 3000");
});
