import {Router} from 'express';
import jwt from "jsonwebtoken";
import { sample_users } from '../data';
import asyncHandler from 'express-async-handler';
import { UserModel } from '../models/user.model';

const router = Router();

router.get("/seed_user", asyncHandler(async (req, res) => {
     const productCount = await UserModel.countDocuments();
     if(productCount> 0){
       res.send("Seed data already exist!");
       return;
     }
 
     await UserModel.create(sample_users);
     res.send("Seed data is created!");
 }
 ))

router.post("/login",  asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    console.log("Model: /login " + email + " " + password);
    const user = await UserModel.findOne({email , password});

    if(user) {
        res.send(generateTokenReponse(user));
       }
    else {
      const BAD_REQUEST = 400;
      res.status(BAD_REQUEST).send("Username or password is invalid!");
    }
}));

const generateTokenReponse = (user: any) => {
    const token = jwt.sign({
        email:user.email, isAdmin: user.isAdmin
      },"MSSE663 Web Framewords Secret Encryption Key",{
        expiresIn:"90d"
      });
    
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
      };
}

export default router;