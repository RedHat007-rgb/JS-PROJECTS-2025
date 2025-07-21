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
const express = require("express");
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express();
app.use(express.json());
console.log(process.env.URL);
const pgCLient = new pg_1.Client(process.env.URL);
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const response=await pgCLient.query(`CREATE TABLE users (id SERIAL PRIMARY KEY,username  VARCHAR(50) UNIQUE NOT NULL,
    // email VARCHAR(50) UNIQUE NOT NULL,password VARCHAR(50) UNIQUE NOT NULL )`);
    // const result=await pgCLient.query(`INSERT INTO users (username, email, password) VALUES (preetham, 123@gmail.com, 12345);`)
    const result = yield pgCLient.query(`
        INSERT INTO users (username, email, password) 
        VALUES ('preetham', '123@gmail.com', '12345');
      `);
    res.json({
        msg: result,
    });
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgCLient.connect();
        console.log("connected to db...");
        app.listen(3000);
    });
}
main();
