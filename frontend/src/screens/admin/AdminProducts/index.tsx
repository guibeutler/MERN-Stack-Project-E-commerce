/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Row, Space, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table'
import AdminNavbar from '@components/AdminNavbar'
import {
	DeleteOutlined,
	EditOutlined,
	FileAddOutlined,
} from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'

interface DataType {
	key: string
	id: string
	productName: string
	price: number
	category: string
}

function AdminProducts() {
	const navigate = useNavigate()
	const isMobile = useMediaQuery({ maxWidth: 1120 })

	const columns: ColumnsType<DataType> = [
		{
			title: 'Codigo',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Nome do produto',
			dataIndex: 'productName',
			key: 'productName',
		},
		{
			title: 'Preco',
			dataIndex: 'price',
			key: 'price',
			render: (_, p) => (
				<p>R$ {p.price.toFixed(2).toString().replace('.', ',')}</p>
			),
		},
		{
			title: 'Categoria',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: 'Editar ou Excluir',
			key: 'editOrDelete',
			dataIndex: 'editOrDelete',
			render: (_, record) => {
				return (
					<Space>
						<Button
							onClick={() => navigate('/admin/edit-products')}
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
			productName: 'Geleia de Morango',
			price: 55.0,
			category: 'Geleias',
		},
		{
			key: '2',
			id: '2',
			productName: 'Geleia de Jabuticaba',
			price: 55.0,
			category: 'Geleias',
		},
		{
			key: '3',
			id: '3',
			productName: 'Kit de Geleias',
			price: 180.0,
			category: 'Kits',
		},
		{
			key: '4',
			id: '4',
			productName: 'Geleia de Pimenta',
			price: 55.0,
			category: 'Geleias',
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
						<h1>Produtos</h1>
						<Button
							onClick={() => navigate('/admin/create-products')}
							style={{ width: '150px' }}
							type="primary"
							icon={<FileAddOutlined />}
						>
							Adicionar
						</Button>
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

export default AdminProducts
