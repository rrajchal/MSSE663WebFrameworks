import {Router} from 'express';
import jwt from "jsonwebtoken";
import { sample_users } from '../data';

const router = Router();
router.post("/login", (req, res) => {
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

export default router;