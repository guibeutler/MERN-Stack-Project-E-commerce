import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes(admin: any) {
	let auth = true
	if (admin) {
		let adminAuth = false
		if (adminAuth) auth = true
	} else {
		let userAuth = true
		if (userAuth) auth = true
	}

	return auth ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
