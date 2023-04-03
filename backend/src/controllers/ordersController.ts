import { Request, Response } from 'express'
import Order from '../models/OrderModel'

const getOrders = async (req: Request, res: Response) => {
	try {
		const orders = await Order.find({})
	} catch (error) {
		console.error(error)
	}
}

export default getOrders
