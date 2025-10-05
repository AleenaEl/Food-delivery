import authMiddleware from "../middleware/auth.js";
import { listOrders, orderStatus, placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";
import express from "express"

const orderRouter = express.Router()

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify",  verifyOrder)
orderRouter.post("/userorders", authMiddleware, userOrders)
orderRouter.get("/listorders",listOrders)
orderRouter.post("/status",orderStatus)

export default orderRouter