import React from 'react'
import { Row, Col, Space } from 'antd'
import {
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
} from '@ant-design/icons'

function Footer() {
	return (
		<footer
			style={{
				position: 'sticky',
				bottom: 0,
				width: '100%',
				zIndex: 10,
				marginTop: '20px',
			}}
		>
			<Row
				style={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#e19563',
					justifyContent: 'center',
					alignContent: 'center',
					height: '70px',
					color: 'white',
				}}
			>
				<Row>
					<Col>Copyright &copy; Da Margi</Col>
				</Row>
				<Row justify={'space-around'}>
					<Space>
						<Col>
							<InstagramOutlined />
						</Col>
						<Col>
							<FacebookOutlined />
						</Col>
						<Col>
							<TwitterOutlined />
						</Col>
					</Space>
				</Row>
			</Row>
		</footer>
	)
}

export default Footer
