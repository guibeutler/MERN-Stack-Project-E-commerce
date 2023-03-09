import React from 'react'
import { Col, DatePicker, Input, Row } from 'antd'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import AdminNavbar from '@components/AdminNavbar'

function AdminAnalytics() {
	const data = [
		{
			name: '12:00 AM',
			'2022': 4000,
			'2023': 4100,
		},
		{
			name: '1:00 AM',
			'2022': 4200,
			'2023': 4300,
		},
		{
			name: '2:00 AM',
			'2022': 4400,
			'2023': 4500,
		},
		{
			name: '3:00 AM',
			'2022': 4600,
			'2023': 4700,
		},
		{
			name: '4:00 AM',
			'2022': 4800,
			'2023': 4900,
		},
		{
			name: '5:00 AM',
			'2022': 5000,
			'2023': 5100,
		},
		{
			name: '6:00 AM',
			'2022': 5200,
			'2023': 5300,
		},
		{
			name: '7:00 AM',
			'2022': 5400,
			'2023': 5500,
		},
		{
			name: '8:00 AM',
			'2022': 5600,
			'2023': 5700,
		},
		{
			name: '9:00 AM',
			'2022': 5800,
			'2023': 5900,
		},
		{
			name: '10:00 AM',
			'2022': 6000,
			'2023': 6100,
		},
	]

	return (
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
			<Col style={{ width: '80%', height: '50vh' }}>
				<h1>Estatisticas</h1>
				<Input.Group compact>
					<DatePicker.RangePicker style={{ width: '70%' }} />
				</Input.Group>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="name"
							label={{
								value: 'Horario',
								offset: 50,
								position: 'insideBottomRight',
							}}
							allowDuplicatedCategory={false}
						/>
						<YAxis
							label={{
								value: 'Valores R$',
								angle: -90,
								position: 'insideLeft',
							}}
						/>
						<Tooltip />
						<Legend verticalAlign="top" height={36} />
						<Line
							type="monotone"
							dataKey="2022"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						<Line type="monotone" dataKey="2023" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</Col>
		</Row>
	)
}

export default AdminAnalytics
