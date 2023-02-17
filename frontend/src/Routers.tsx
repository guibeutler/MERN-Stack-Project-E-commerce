import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '@components/Footer'
import Header from '@components/Header'
import ProtectedRoutes from '@components/ProtectedRoutes'
import RoutesWithChat from '@components/RoutesWithChat'
import AdminAnalytics from '@screens/admin/AdminAnalytics'
import AdminChats from '@screens/admin/AdminChats'
import AdminCreateProducts from '@screens/admin/AdminCreateProducts'
import AdminEditProducts from '@screens/admin/AdminEditProducts'
import AdminEditUser from '@screens/admin/AdminEditUser'
import AdminOrderDetails from '@screens/admin/AdminOrderDetails'
import AdminOrders from '@screens/admin/AdminOrders'
import AdminProducts from '@screens/admin/AdminProducts'
import AdminUsers from '@screens/admin/AdminUsers'
import Cart from '@screens/Cart'
import Home from '@screens/Home'
import Login from '@screens/Login'
import ProductDetails from '@screens/ProductDetails'
import ProductList from '@screens/ProductList'
import Register from '@screens/Register'
import UserCartDetails from '@screens/users/UserCartDetails'
import UserOrderDetails from '@screens/users/UserOrderDetails'
import UserOrders from '@screens/users/UserOrders'
import UserProfile from '@screens/users/UserProfile'
import ScrollToTop from '@components/ScrollToTop'
import './routers.css'

function Routers() {
	return (
		<div className="main-container">
			<BrowserRouter>
				{/* <Navbar /> */}
				<ScrollToTop />
				<Header />
				<Routes>
					<Route element={<RoutesWithChat />}>
						<Route path={'/'} element={<Home />} />
						<Route path={'/cart'} element={<Cart />} />
						<Route path={'/login'} element={<Login />} />
						<Route path={'/product-details/:id'} element={<ProductDetails />} />
						<Route path={'/product-list'} element={<ProductList />} />
						<Route path={'/register'} element={<Register />} />

						<Route element={<ProtectedRoutes admin={false} />}>
							<Route
								path={'/user/cart-details'}
								element={<UserCartDetails />}
							/>
							<Route
								path={'/user/order-details'}
								element={<UserOrderDetails />}
							/>
							<Route path={'/user/my-orders'} element={<UserOrders />} />
							<Route path={'/user'} element={<UserProfile />} />
						</Route>
					</Route>

					<Route element={<ProtectedRoutes admin={true} />}>
						<Route path={'/admin/analytics'} element={<AdminAnalytics />} />
						<Route path={'/admin/chats'} element={<AdminChats />} />
						<Route
							path={'/admin/create-products'}
							element={<AdminCreateProducts />}
						/>
						<Route
							path={'/admin/edit-products'}
							element={<AdminEditProducts />}
						/>
						<Route path={'/admin/edit-user'} element={<AdminEditUser />} />
						<Route
							path={'/admin/order-details'}
							element={<AdminOrderDetails />}
						/>
						<Route path={'/admin/orders'} element={<AdminOrders />} />
						<Route path={'/admin/products'} element={<AdminProducts />} />
						<Route path={'/admin/users'} element={<AdminUsers />} />
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default Routers
