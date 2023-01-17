import React from 'react'
import { Row, Col, Space } from 'antd'
import {
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
} from '@ant-design/icons'
import './style.css'

function Footer() {
	return (
		<footer>
			<Row style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
