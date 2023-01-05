import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import UserChat from '../UserChat'

function ProtectedRoutes(admin: any) {
	if (admin) {
		let adminAuth = true
		return adminAuth ? <Outlet /> : <Navigate to={'/login'} />
	} else {
		let userAuth = true
		return userAuth ? (
			<>
				<UserChat />
				<Outlet />
			</>
		) : (
			<Navigate to={'/login'} />
		)
	}
}

export default ProtectedRoutes
