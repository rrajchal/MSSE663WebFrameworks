import {Router} from 'express';
import { sample_categories, sample_data } from '../data';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/product.model';

const router = Router();

router.get("/seed_product", asyncHandler(
    async (req, res) => {
       console.log("Populating Product database with a seed data");
       const productsCount = await ProductModel.countDocuments();
       if(productsCount> 0){
         res.send("Seed data already exist!");
         return;
       }
   
       await ProductModel.create(sample_data);
       res.send("Seed data is created!");
   }
));
   
router.get("/", asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    console.log("Model: GET /api/products");
    res.send(products);
}));

router.get("/search/:searchTerm", asyncHandler (async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const searchTerm = req.params.searchTerm;
    console.log("Model: GET search/" + searchTerm);
    const products = await ProductModel.find({
        $or: [
          { name: { $regex: searchRegex } },
          { category: { $regex: searchRegex } }
        ]
      });
    res.send(products);
}));

router.get("/categories", asyncHandler (async (req, res) => {
    console.log("Model: GET /categories");
    const products = await ProductModel.find();
    const categories = generateCategoriesMap(products);
    res.send(categories);
}));

router.get("/category/:category", asyncHandler (async (req, res) => {
    const categoryName = req.params.category;
    console.log("Model: GET category/" + categoryName);
    const products = await ProductModel.find({category: categoryName})
    res.send(products);
}));

router.get("/:id", asyncHandler (async (req, res) => {
    const productId = req.params.id;
    console.log("Model: /:id: " + productId);
    const products = await ProductModel.findById(productId);
    res.send(products);
}));


const generateCategoriesMap = (products: any[]): any[] => {
    const categoryMap: { [key: string]: number } = {};
  
    products.forEach(product => {
      Object.keys(categoryMap).forEach(category => {
        if (product.name.toLowerCase().includes(category.toLowerCase())) {
          categoryMap[category]++;
        }
      });
      
      if (categoryMap[product.category]) {
        categoryMap[product.category]++;
      } else {
        categoryMap[product.category] = 1;
      }
    });
  
    return Object.keys(categoryMap).map(category => ({
      name: category,
      count: categoryMap[category]
    }));
  };

export default router;