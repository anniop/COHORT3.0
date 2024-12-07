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
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://cohortdb_owner:QM3tP9uRyKsv@ep-shy-fire-a5mopp63.us-east-2.aws.neon.tech/cohortdb?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        yield pgClient.query('BEGIN'); // starting a transaction
        const userQuery = `insert into users(email, username, password) values($1,$2,$3) RETURNING id`;
        const userValues = [username, email, password];
        const response = yield pgClient.query(userQuery, userValues);
        const userId = response.rows[0].id;
        const addressQuery = `insert into addresses(city, country,street,pincode, user_id) values ($1,$2,$3,$4,$5)`;
        const addressValues = [city, country, street, pincode, userId];
        yield pgClient.query(addressQuery, addressValues);
        yield pgClient.query('COMMIT'); // transaction completed
        console.log("Transaction done SuccessFully");
        res.json({
            message: "Signin SuccessFull"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error While Singup"
        });
    }
}));
app.listen(3000, () => {
    console.log("Listining on port 3000");
});
