import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './screens/Cart'
import Home from './screens/Home'
import Login from './screens/Login'
import ProductDetails from './screens/ProductDetails'
import ProductList from './screens/ProductList'

function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/cart'} element={<Cart />} />
				<Route path={'/login'} element={<Login />} />
				<Route path={'/productDetails'} element={<ProductDetails />} />
				<Route path={'/productList'} element={<ProductList />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
