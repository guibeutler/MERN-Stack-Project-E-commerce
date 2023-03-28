const Product = require('../models/ProductModel')

const getProducts = (req: any, res: { send: (arg0: string) => void }) => {
	Product.create({ name: 'Geleia de uva' })

	res.send('GET PRODUCTS')
}

module.exports = getProducts
