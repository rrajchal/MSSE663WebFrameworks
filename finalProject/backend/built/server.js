"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var product_router_1 = __importDefault(require("./routers/product.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_config_1 = require("./configs/database.config");
var order_router_1 = __importDefault(require("./routers/order.router"));
dotenv_1.default.config();
var app = (0, express_1.default)();
(0, database_config_1.dbConnect)(); // Connect Database to the database name "db"
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use('/assets', express_1.default.static('controller/assets'));
app.use("/api/products", product_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
/*
app.get("/", (req, res) => {
    console.log("Backend: GET /");
    res.send(sample_data);
});

app.get("/api/products", (req, res) => {
    console.log("Backend: GET /api/products");
    res.send(sample_data);
});

app.get("/api/products/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    console.log("Backend: GET /api/products/search/" + searchTerm);
    const products = sample_data.
    filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(products);
});

app.get("/api/products/categories", (req, res) => {
    console.log("Backend: GET /api/products/categories");
    res.send(sample_categories);
});

app.get("/api/products/category/:category", (req, res) => {
    const categoryName = req.params.category;
    console.log("Backend: GET /api/products/category/" + categoryName);
    const products = sample_data.filter(product => product.category?.includes(categoryName));
    res.send(products);
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    console.log("Backend: /api/products/:id: " + productId);
    const products = sample_data.find(product => product.id == productId);
    res.send(products);
});


app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user) {
        res.send(generateTokenReponse(user));
       }
       else{
         const BAD_REQUEST = 400;
         res.status(BAD_REQUEST).send("Username or password is invalid!");
       }
});

const generateTokenReponse = (user: any) => {
    const token = jwt.sign({
        email:user.email, isAdmin: user.isAdmin
      },"MSSE663 Web Framewords Encryption Key",{
        expiresIn:"90d"
      });
    
      user.token = token;
      return user;
}
*/
var port = 5000;
app.listen(port, function () {
    console.log("Backend: Website served on http://localhost:" + port);
});
