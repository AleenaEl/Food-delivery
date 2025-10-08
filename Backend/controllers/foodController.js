import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

const addFood = async (req,res) => {
    // let image_filename = `${req.file.filename}`
    let image_filename = req.file ? req.file.path : null
    const { name, description, price, category } = req.body
    // const userid=req.payload
    try {
        const existingFood = await foodModel.findOne({ name,description })
        if (existingFood) {
            res.status(406).json("food already exist in this category!")
        } else {
            const food = new foodModel({
                name, description, price, category, image: image_filename

            })
        await food.save()
        res.json({success:true,message:'Food Added Successfully'})
        }


    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

// list food
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error....!'})
    }
}

// get items
 const getfood = async (req, res) => {
     const id = req.params.id
    //  console.log(`id:${id}`);
    try {
        const get = await foodModel.findById({_id:id})
        res.json({success:true,data:get})
    } catch (error) {
        
        res.json({ success: false, message: 'Error in getting!' })
    }
}

// update
const updateFood = async (req, res) => {
    const id = req.params.id
    const {
        name, description, price, category
    } = req.body
    let img 
    // Check if a new file is uploaded
    if (req.file) {
        img = req.file ? req.file.path : null
    } else {
        // If no new file is uploaded, keep the old image
        const old = await foodModel.findById({ _id:id })
        img=old.image
    }
    try {
        await foodModel.findByIdAndUpdate({ _id: id
        }, { name, description, price, category, image: img })
        res.json({success:true,message:'Successfully Updated'})
    } catch (error) {
        res.json({ success: true, message: 'Successfully Updated' })
    }
}

// remove food items

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        // delete the saved images
        // fs.unlink(`uploads/${food.image}`, () => { })
        const imageUrl = food.image;
        if (imageUrl) {
            const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0]; // e.g., food-delivery/IMG-timestamp-filename
            await cloudinary.uploader.destroy(publicId);
        }


        //delete the food data
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
        
    } catch (error) {
        console.log(error)
            res.json({success:false,message:'Error'});
    }
}

export { addFood, listFood, removeFood, getfood, updateFood }