import React from 'react'
import { Outlet } from 'react-router-dom'
import UserChat from '../UserChat'

function RoutesWithChat() {
	return (
		<>
			<UserChat /> <Outlet />
		</>
	)
}

export default RoutesWithChat
