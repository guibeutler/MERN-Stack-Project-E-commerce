/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react'
import { Col, List } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
	ArrowLeftOutlined,
	InboxOutlined,
	LineChartOutlined,
	MessageOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from '@ant-design/icons'

function AdminNavbar() {
	const navigate = useNavigate()

	const getMenuItem = (url: string, icon: ReactNode) => (
		<a
			onClick={() => navigate(url)}
			style={window.location.href.includes(url) ? { fontWeight: 'bold' } : {}}
		>
			{icon} {url.split('/').pop()}
		</a>
	)

	const menuList = [
		getMenuItem('/admin/orders', <UnorderedListOutlined />),
		getMenuItem('/admin/products', <InboxOutlined />),
		getMenuItem('/admin/users', <UserOutlined />),
		getMenuItem('/admin/chats', <MessageOutlined />),
		getMenuItem('/admin/analytics', <LineChartOutlined />),
		getMenuItem('/logout', <ArrowLeftOutlined />),
	]

	return (
		<Col>
			<List
				size="small"
				bordered
				dataSource={menuList}
				renderItem={(item) => <List.Item>{item}</List.Item>}
			/>
		</Col>
	)
}

export default AdminNavbar
