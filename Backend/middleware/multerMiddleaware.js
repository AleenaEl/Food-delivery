import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'; 
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// image storage
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "food-delivery", 
        allowed_formats: ["jpg", "png", "jpeg"], 
        public_id: (req, file) => `IMG-${Date.now()}-${file.originalname}`, 
    }
})
// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null,'./uploads')
//     },
//     filename: (req, file, callback) => {
//         return callback(null,`IMG-${Date.now()}-${file.originalname}`)
//     }
// })

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        callback(null,true)
    }
    else {
        callback(null, false)
        return callback(new Error("please upload following formats [jpeg/png/jpg] only..."))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

export default multerConfig