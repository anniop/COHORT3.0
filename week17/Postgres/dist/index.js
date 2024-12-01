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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://cohortdb_owner:QM3tP9uRyKsv@ep-shy-fire-a5mopp63.us-east-2.aws.neon.tech/cohortdb?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
        const values = [username, email, password];
        yield pgClient.query(insertQuery, values);
        res.json({
            message: "User Signed Up"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "error while signing up"
        });
    }
}));
app.listen(3000, () => {
    console.log("server started at port 3000");
});
