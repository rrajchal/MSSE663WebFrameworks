import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export default (req: any, res: any, next: any) => {
    console.log("Backend: auth.mid.ts #5")
    const token = req.headers['access_token'] as string;
    if (!token) {
        return res.status(HTTP_UNAUTHORIZED).send('Access token is missing');
    }

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET!);
        req.user = decodedUser;
        next();
    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send('Invalid access token');
        
    }
}