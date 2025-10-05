import express from 'express'
import { getfood, addFood, listFood, removeFood, updateFood } from '../controllers/foodController.js'
import multerConfig from '../middleware/multerMiddleaware.js'

const foodRouter = express.Router()

// to add food item
foodRouter.post("/add", multerConfig.single('image'), addFood)
//to get item
foodRouter.get('/get/:id', getfood)
// update item
foodRouter.put('/update/:id',multerConfig.single('image'),updateFood)
// list the food items
foodRouter.get("/list", listFood)
// remove food
foodRouter.post("/remove",removeFood)



export default foodRouter