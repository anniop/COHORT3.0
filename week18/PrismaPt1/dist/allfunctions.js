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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const client_1 = require("@prisma/client");
(0, dotenv_1.config)();
const client = new client_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "somu",
                password: "123123",
                age: 21,
                city: "Nashik",
            },
        });
        console.log("User created successfully");
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 3
            }
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: {
                id: 1
            },
            data: {
                username: "Jay Ganesh"
            }
        });
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            }
        });
        console.log(user);
    });
}
// createUser();
// deleteUser();
updateUser();
// findUser();
