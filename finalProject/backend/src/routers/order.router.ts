import {Router} from 'express';
import asyncHander from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderModel } from '../models/order.model';
import { OrderStatus } from '../constants/order_status';
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

router.post('/create', asyncHander(async (req:any, res:any) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    console.log("Backend order.router.ts", requestOrder, req.user.id);

    const newOrder = new OrderModel({...requestOrder, user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
}))

router.get('/newOrder', asyncHander( async (req:any, res) => {
    const order= await OrderModel.findOne({user: req.user.id, status: OrderStatus.NEW});
    if(order) {
        res.send(order);
    } else {
        res.status(HTTP_BAD_REQUEST).send();
    }
}))

router.post('/pay', asyncHander( async (req:any, res) => {
    const {paymentId} = req.body;
    const order = await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
}))

router.get('/track/:id', asyncHander( async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
}))

export default router;