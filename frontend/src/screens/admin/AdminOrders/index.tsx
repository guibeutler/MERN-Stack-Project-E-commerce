/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row, Table, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table'
import moment from 'moment'
import AdminNavbar from '@components/AdminNavbar'

interface DataType {
	key: string
	order: number
	user: string
	date: string
	amount: number
	tags: string[]
	details: string
	paymentMethod: string
}

function AdminOrders() {
	const navigate = useNavigate()

	const columns: ColumnsType<DataType> = [
		{
			title: 'Pedido',
			dataIndex: 'order',
			key: 'order',
		},
		{
			title: 'Usuário',
			dataIndex: 'user',
			key: 'user',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Data',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Forma de pgto',
			dataIndex: 'paymentMethod',
			key: 'paymentMethod',
		},
		{
			title: 'Total',
			dataIndex: 'amount',
			key: 'amount',
			render: (_, price) => (
				<a>R$ {price.amount.toFixed(2).toString().replace('.', ',')}</a>
			),
		},
		{
			title: 'Status',
			key: 'status',
			dataIndex: 'status',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color =
							tag === 'entregue'
								? 'green'
								: tag === 'cancelado'
								? 'volcano'
								: tag === 'processando'
								? 'yellow'
								: 'geekblue'

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
			title: 'Detalhes',
			key: 'details',
			dataIndex: 'details',
			render: (_, d) => {
				return (
					<a onClick={() => navigate('/admin/order-details')}>{d.details}</a>
				)
			},
		},
	]

	const currentDateTime = moment().local().format('DD/MM/YYYY')

	const data: DataType[] = [
		{
			key: '1',
			order: 1,
			user: 'John Brown',
			date: currentDateTime,
			amount: 220.0,
			tags: ['entregue'],
			details: 'Visualizar pedido',
			paymentMethod: 'Pix',
		},
		{
			key: '2',
			order: 2,
			user: 'Jim Green',
			date: currentDateTime,
			amount: 300.25,
			tags: ['enviado'],
			details: 'Visualizar pedido',
			paymentMethod: 'Boleto',
		},
		{
			key: '3',
			order: 3,
			user: 'Joe Black',
			date: currentDateTime,
			amount: 150.0,
			tags: ['cancelado'],
			details: 'Visualizar pedido',
			paymentMethod: 'Cartao de credito',
		},
		{
			key: '4',
			order: 4,
			user: 'Joe Black',
			date: currentDateTime,
			amount: 150.0,
			tags: ['processando'],
			details: 'Visualizar pedido',
			paymentMethod: 'Pix',
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
					<h1>Pedidos</h1>
					<Table
						columns={columns}
						dataSource={data}
						style={{ width: '80vw' }}
						size="small"
					/>
				</Col>
			</Row>
		</div>
	)
}

export default AdminOrders
