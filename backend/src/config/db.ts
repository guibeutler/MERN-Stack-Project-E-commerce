import mongoose from 'mongoose'
import { MongoClientOptions } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async (): Promise<void> => {
	try {
		const uri = process.env.MONGO_URI ? process.env.MONGO_URI : ''
		await mongoose.connect(uri, {
			useUnifiedTopology: true,
		} as MongoClientOptions)
		console.log('MongoDB connection SUCCESS')
	} catch (error) {
		console.error('MongoDB connection FAIL')
		process.exit(1)
	}
}

export { connectDB }
