import userModel from "../models/userModel.js";

// add item to the cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId })
        let cartData = userData.cartData
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId]=1
        } else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({success:true,message:"Added to cart"})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message:'Error adding to cart'})
    }
}
// remove items from the Cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: "removed from cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error removing from cart' })
    }
}
// feth user cart data
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData
        // console.log(cartData)
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error fetching from cart' })
    }
}

export {addToCart,removeFromCart,getCart}