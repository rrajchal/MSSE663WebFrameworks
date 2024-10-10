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
const data_1 = require("../data");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const product_model_1 = require("../models/product.model");
const morgan_1 = __importDefault(require("morgan"));
const router = (0, express_1.Router)();
// Use morgan for logging
router.use((0, morgan_1.default)('tiny'));
router.get("/seed_product", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Populating Product database with a seed data");
    const productsCount = yield product_model_1.ProductModel.countDocuments();
    if (productsCount > 0) {
        res.send("Seed data already exist!");
        return;
    }
    yield product_model_1.ProductModel.create(data_1.sample_data);
    res.send("Seed data is created!");
})));
router.get("/", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.ProductModel.find();
    console.log("Model: GET /api/products");
    res.send(products);
})));
router.get("/search/:searchTerm", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const searchTerm = req.params.searchTerm;
    console.log("Model: GET search/" + searchTerm);
    const products = yield product_model_1.ProductModel.find({
        $or: [
            { name: { $regex: searchRegex } },
            { category: { $regex: searchRegex } }
        ]
    });
    res.send(products);
})));
router.get("/categories", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Model: GET /categories");
    const products = yield product_model_1.ProductModel.find();
    const categories = generateCategoriesMap(products);
    res.send(categories);
})));
router.get("/category/:category", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryName = req.params.category;
    console.log("Model: GET category/" + categoryName);
    const products = yield product_model_1.ProductModel.find({ category: categoryName });
    res.send(products);
})));
router.get("/:id", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    console.log("Model: /:id: " + productId);
    const products = yield product_model_1.ProductModel.findOne({ id: productId });
    res.send(products);
})));
router.post("/create", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Model: createProduct: ");
    const newProduct = new product_model_1.ProductModel(req.body);
    const savedProduct = yield newProduct.save();
    res.status(201).send(savedProduct);
})));
router.delete("/delete/:id", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    console.log("Model: DELETE /:id: " + productId);
    try {
        const product = yield product_model_1.ProductModel.findOne({ id: productId });
        if (product) {
            yield product.deleteOne();
            res.status(200).send({ message: 'Product deleted successfully', product });
        }
        else {
            res.status(404).send({ message: 'Product not found: ' + productId });
        }
    }
    catch (error) {
        console.error("Error deleting product: " + productId + ": ", error);
        res.status(500).send({ message: 'Internal server error' });
    }
})));
// Update product by ID
router.put("/update/:id", (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const updateData = req.body;
    console.log("Model: UPDATE /:id: " + productId);
    try {
        const product = yield product_model_1.ProductModel.findOneAndUpdate({ id: productId }, updateData, { new: true });
        if (product) {
            res.status(200).send({ message: 'Product updated successfully', product });
        }
        else {
            res.status(404).send({ message: 'Product not found: ' + productId });
        }
    }
    catch (error) {
        console.error("Error updating product: " + productId + ": ", error);
        res.status(500).send({ message: 'Internal server error' });
    }
})));
const generateCategoriesMap = (products) => {
    const categoryMap = {};
    products.forEach(product => {
        Object.keys(categoryMap).forEach(category => {
            if (product.name.toLowerCase().includes(category.toLowerCase())) {
                categoryMap[category]++;
            }
        });
        if (categoryMap[product.category]) {
            categoryMap[product.category]++;
        }
        else {
            categoryMap[product.category] = 1;
        }
    });
    return Object.keys(categoryMap).map(category => ({
        name: category,
        count: categoryMap[category]
    }));
};
exports.default = router;
//# sourceMappingURL=product.router.js.map