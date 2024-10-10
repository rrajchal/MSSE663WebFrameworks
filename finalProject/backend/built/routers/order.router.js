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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const http_status_1 = require("../constants/http_status");
const order_model_1 = require("../models/order.model");
const order_status_1 = require("../constants/order_status");
const auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
const router = (0, express_1.Router)();
router.use(auth_mid_1.default);
router.post('/create', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOrder = req.body;
    if (requestOrder.items.length <= 0) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }
    yield order_model_1.OrderModel.deleteOne({
        user: req.user.id,
        status: order_status_1.OrderStatus.NEW
    });
    console.log("Backend order.router.ts", requestOrder, req.user.id);
    const newOrder = new order_model_1.OrderModel(Object.assign(Object.assign({}, requestOrder), { user: req.user.id }));
    yield newOrder.save();
    res.send(newOrder);
})));
router.get('/newOrder', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.OrderModel.findOne({ user: req.user.id, status: order_status_1.OrderStatus.NEW });
    if (order) {
        res.send(order);
    }
    else {
        res.status(http_status_1.HTTP_BAD_REQUEST).send();
    }
})));
router.post('/pay', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentId } = req.body;
    const order = yield order_model_1.OrderModel.findOne({ user: req.user.id, status: order_status_1.OrderStatus.NEW });
    if (!order) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }
    order.paymentId = paymentId;
    order.status = order_status_1.OrderStatus.PAYED;
    yield order.save();
    res.send(order._id);
})));
router.get('/track/:id', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.OrderModel.findById(req.params.id);
    res.send(order);
})));
exports.default = router;
//# sourceMappingURL=order.router.js.map