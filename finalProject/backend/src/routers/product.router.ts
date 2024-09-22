import {Router} from 'express';
import { sample_categories, sample_data } from '../data';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/product.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const foodsCount = await ProductModel.countDocuments();
       if(foodsCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await ProductModel.create(sample_data);
       res.send("Seed Is Done!");
   }
   ))
   

router.get("/", (req, res) => {
    console.log("Backend: GET /api/products");
    res.send(sample_data);
});

router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    console.log("Backend: GET /api/products/search/" + searchTerm);
    const products = sample_data.
    filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(products);
});

router.get("/categories", (req, res) => {
    console.log("Backend: GET /api/products/categories");
    res.send(sample_categories);
});

router.get("/category/:category", (req, res) => {
    const categoryName = req.params.category;
    console.log("Backend: GET /api/products/category/" + categoryName);
    const products = sample_data.filter(product => product.category?.includes(categoryName));
    res.send(products);
});

router.get("/:id", (req, res) => {
    const productId = req.params.id;
    console.log("Backend: /api/products/:id: " + productId);
    const products = sample_data.find(product => product.id == productId);
    res.send(products);
});


export default router;