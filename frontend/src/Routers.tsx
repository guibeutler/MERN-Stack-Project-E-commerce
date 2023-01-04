import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './screens/Cart'
import Home from './screens/Home'
import Login from './screens/Login'
import ProductDetails from './screens/ProductDetails'
import ProductList from './screens/ProductList'
import Register from './screens/Register'
import UserCartDetails from './screens/users/UserCartDetails'
import UserOrderDetails from './screens/users/UserOrderDetails'
import UserOrders from './screens/users/UserOrders'
import UserProfile from './screens/users/UserProfile'

function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/cart'} element={<Cart />} />
				<Route path={'/login'} element={<Login />} />
				<Route path={'/product-details/:id'} element={<ProductDetails />} />
				<Route path={'/product-list'} element={<ProductList />} />
				<Route path={'/register'} element={<Register />} />
				<Route path={'/user/cart-details'} element={<UserCartDetails />} />
				<Route path={'/user/order-details'} element={<UserOrderDetails />} />
				<Route path={'/user/my-orders'} element={<UserOrders />} />
				<Route path={'/user'} element={<UserProfile />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
