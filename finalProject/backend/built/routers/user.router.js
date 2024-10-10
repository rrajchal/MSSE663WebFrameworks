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
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_1 = require("../data");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_1 = require("../constants/http_status");
const router = (0, express_1.Router)();
router.get("/seed_user", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productCount = yield user_model_1.UserModel.countDocuments();
    if (productCount > 0) {
        res.send("Seed data already exist!");
        return;
    }
    yield user_model_1.UserModel.create(data_1.sample_users);
    res.send("Seed data is created!");
})));
router.post("/login", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log("Model: /login " + email + " " + password);
    const user = yield user_model_1.UserModel.findOne({ email });
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        res.send(generateTokenReponse(user));
    }
    else {
        res.status(http_status_1.HTTP_BAD_REQUEST).send("Username or password is invalid!");
    }
})));
router.post("/register", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, address } = req.body;
    const user = yield user_model_1.UserModel.findOne({ email });
    if (user) {
        res.status(http_status_1.HTTP_BAD_REQUEST)
            .send('User is already exist, please login!');
        return;
    }
    const encryptedPassword = yield bcryptjs_1.default.hash(password, 10);
    const newUser = {
        id: '',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    };
    const dbUser = yield user_model_1.UserModel.create(newUser);
    res.send(generateTokenReponse(dbUser));
})));
const generateTokenReponse = (user) => {
    const token = jsonwebtoken_1.default.sign({
        id: user.id, email: user.email, isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
};
exports.default = router;
//# sourceMappingURL=user.router.js.map