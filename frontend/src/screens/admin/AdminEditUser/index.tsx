import React, { useState } from 'react'
import { Row, Col, Button, Form, Input, Checkbox } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

function AdminEditUser() {
	const [loadings, setLoadings] = useState<boolean[]>([])
	const [isChecked, setIsChecked] = useState(false)
	const navigate = useNavigate()

	const enterLoading = (index: number) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings]
			newLoadings[index] = true
			return newLoadings
		})

		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings]
				newLoadings[index] = false
				return newLoadings
			})
		}, 6000)
	}

	const handleAdmin = () => {
		setIsChecked(!isChecked)
	}

	return (
		<Row style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
			<Col style={{ width: '350px' }}>
				<Row>
					<Col>
						<Button
							onClick={() => navigate(-1)}
							size="small"
							icon={<LeftOutlined />}
						/>
						<h1>Editar usuario</h1>
					</Col>
				</Row>

				<Form layout="vertical" name="basic" autoComplete="off">
					<Form.Item label="Nome" name="firstName">
						<Input />
					</Form.Item>
					<Form.Item label="Sobrenome" name="lastName">
						<Input />
					</Form.Item>
					<Form.Item label="E-mail" name="email">
						<Input />
					</Form.Item>

					<Form.Item>
						<Checkbox onChange={handleAdmin} checked={isChecked}>
							Usuario Admin
						</Checkbox>
					</Form.Item>

					<Form.Item>
						{loadings[1] ? (
							<Button
								style={{ width: '350px' }}
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Atualizando
							</Button>
						) : (
							<Button
								style={{ width: '350px' }}
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Atualizar
							</Button>
						)}
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default AdminEditUser
