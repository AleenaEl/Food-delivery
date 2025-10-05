import mongoose from 'mongoose'

const connectionString=process.env.DATABASE

export const connectDB = async () => {
    await mongoose.connect(connectionString).then(() => {
        console.log('Database Connected Successfully');
    }).catch((err) => {
        console.log(`MongoDb connection failed! error:${err}`);
    })
}