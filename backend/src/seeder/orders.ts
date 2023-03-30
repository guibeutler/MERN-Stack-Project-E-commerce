import { ObjectId } from 'mongodb'

const orders = Array.from({ length: 10 }).map((_, idx) => {
	const date = new Date()

	// let day = 20

	// if (idx < 10) {
	// 	let hour = '0' + idx
	// 	let subtotal = 100
	// } else if (idx > 16 && idx < 21) {
	// 	let hour = idx
	// 	let subtotal = 100 + 12 * idx
	// } else {
	// 	let hour = idx
	// 	let subtotal = 100
	// }

	return {
		user: new ObjectId(),
		orderTotal: {
			itemsCount: 3,
			cartSubtotal: 55,
		},
		cartItems: [
			{
				name: 'Geleia de uva',
				price: 25,
				image: {
					path: 'https://4.bp.blogspot.com/-jOvKoG0VIKw/W8NgOpwpPtI/AAAAAAAAMiU/gVZkp0QTLicLZXMSmh1q45dn1Mj-GTl5QCLcBGAs/s1600/geleia%2Bde%2Buva2.JPG',
				},
				quantity: 10,
				count: 2,
			},
		],
		paymentMethod: 'PIX',
		isPaid: false,
		isDelivered: false,
		createdAt: date,
	}
})

export default orders
