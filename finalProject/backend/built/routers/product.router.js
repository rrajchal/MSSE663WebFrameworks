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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("../data");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var product_model_1 = require("../models/product.model");
var morgan_1 = __importDefault(require("morgan"));
var router = (0, express_1.Router)();
// Use morgan for logging
router.use((0, morgan_1.default)('tiny'));
router.get("/seed_product", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productsCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Populating Product database with a seed data");
                return [4 /*yield*/, product_model_1.ProductModel.countDocuments()];
            case 1:
                productsCount = _a.sent();
                if (productsCount > 0) {
                    res.send("Seed data already exist!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, product_model_1.ProductModel.create(data_1.sample_data)];
            case 2:
                _a.sent();
                res.send("Seed data is created!");
                return [2 /*return*/];
        }
    });
}); }));
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_model_1.ProductModel.find()];
            case 1:
                products = _a.sent();
                console.log("Model: GET /api/products");
                res.send(products);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/search/:searchTerm", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, searchTerm, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params.searchTerm, 'i');
                searchTerm = req.params.searchTerm;
                console.log("Model: GET search/" + searchTerm);
                return [4 /*yield*/, product_model_1.ProductModel.find({
                        $or: [
                            { name: { $regex: searchRegex } },
                            { category: { $regex: searchRegex } }
                        ]
                    })];
            case 1:
                products = _a.sent();
                res.send(products);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/categories", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Model: GET /categories");
                return [4 /*yield*/, product_model_1.ProductModel.find()];
            case 1:
                products = _a.sent();
                categories = generateCategoriesMap(products);
                res.send(categories);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/category/:category", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryName, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryName = req.params.category;
                console.log("Model: GET category/" + categoryName);
                return [4 /*yield*/, product_model_1.ProductModel.find({ category: categoryName })];
            case 1:
                products = _a.sent();
                res.send(products);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:id", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                console.log("Model: /:id: " + productId);
                return [4 /*yield*/, product_model_1.ProductModel.findOne({ id: productId })];
            case 1:
                products = _a.sent();
                res.send(products);
                return [2 /*return*/];
        }
    });
}); }));
router.post("/create", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newProduct, savedProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Model: createProduct: ");
                newProduct = new product_model_1.ProductModel(req.body);
                return [4 /*yield*/, newProduct.save()];
            case 1:
                savedProduct = _a.sent();
                res.status(201).send(savedProduct);
                return [2 /*return*/];
        }
    });
}); }));
router.delete("/delete/:id", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                console.log("Model: DELETE /:id: " + productId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, product_model_1.ProductModel.findOne({ id: productId })];
            case 2:
                product = _a.sent();
                if (!product) return [3 /*break*/, 4];
                return [4 /*yield*/, product.deleteOne()];
            case 3:
                _a.sent();
                res.status(200).send({ message: 'Product deleted successfully', product: product });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).send({ message: 'Product not found: ' + productId });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error("Error deleting product: " + productId + ": ", error_1);
                res.status(500).send({ message: 'Internal server error' });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); }));
// Update product by ID
router.put("/update/:id", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, updateData, product, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                updateData = req.body;
                console.log("Model: UPDATE /:id: " + productId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, product_model_1.ProductModel.findOneAndUpdate({ id: productId }, updateData, { new: true })];
            case 2:
                product = _a.sent();
                if (product) {
                    res.status(200).send({ message: 'Product updated successfully', product: product });
                }
                else {
                    res.status(404).send({ message: 'Product not found: ' + productId });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Error updating product: " + productId + ": ", error_2);
                res.status(500).send({ message: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }));
var generateCategoriesMap = function (products) {
    var categoryMap = {};
    products.forEach(function (product) {
        Object.keys(categoryMap).forEach(function (category) {
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
    return Object.keys(categoryMap).map(function (category) { return ({
        name: category,
        count: categoryMap[category]
    }); });
};
exports.default = router;
