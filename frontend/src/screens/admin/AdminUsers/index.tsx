/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Row, Space, Table, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table'
import AdminNavbar from '@components/AdminNavbar'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'

interface DataType {
	key: string
	id: string
	firstName: string
	lastName: string
	email: string
	tags: string[]
}

function AdminUsers() {
	const navigate = useNavigate()
	const isMobile = useMediaQuery({ maxWidth: 1120 })

	const columns: ColumnsType<DataType> = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Nome',
			dataIndex: 'firstName',
			key: 'firstName',
		},
		{
			title: 'Sobrenome',
			dataIndex: 'lastName',
			key: 'lastName',
		},
		{
			title: 'E-mail',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Admin',
			dataIndex: 'isAdmin',
			key: 'isAdmin',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag === 'sim' ? 'green' : 'volcano'

						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						)
					})}
				</>
			),
		},
		{
			title: 'Editar ou Excluir',
			key: 'editOrDelete',
			dataIndex: 'editOrDelete',
			render: (_, record) => {
				return (
					<Space>
						<Button
							onClick={() => navigate('/admin/edit-user')}
							style={{ width: '50px' }}
							type="primary"
						>
							<EditOutlined />
						</Button>
						<Button style={{ width: '50px' }} danger>
							<DeleteOutlined />
						</Button>
					</Space>
				)
			},
		},
	]

	const data: DataType[] = [
		{
			key: '1',
			id: '1',
			firstName: 'Joe',
			lastName: 'Butler',
			email: 'joe.butler@gmail.com',
			tags: ['sim'],
		},
		{
			key: '2',
			id: '2',
			firstName: 'Joe',
			lastName: 'Butler',
			email: 'joe.butler@gmail.com',
			tags: ['nao'],
		},
	]

	return (
		<div>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Col>
					<AdminNavbar />
				</Col>
				<Col>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'baseline',
						}}
					>
						<h1>Usuarios</h1>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						style={{ width: isMobile ? '100%' : '80vw' }}
						scroll={{ x: true }}
						size="small"
					/>
				</Col>
			</Row>
		</div>
	)
}

export default AdminUsers
