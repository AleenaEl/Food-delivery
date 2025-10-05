import multer from "multer";

// image storage

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'./uploads')
    },
    filename: (req, file, callback) => {
        return callback(null,`IMG-${Date.now()}-${file.originalname}`)
    }
})

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
    storage:storage,fileFilter
})

export default multerConfig