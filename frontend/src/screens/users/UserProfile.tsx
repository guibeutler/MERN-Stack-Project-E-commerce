/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Button, Col, Form, Input, InputNumber, Row, Select } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

function UserProfile() {
	const [loadings, setLoadings] = useState<boolean[]>([])
	const [prefix, setPrefix] = useState('+55')
	const [phone, setPhone] = useState('')
	const navigate = useNavigate()

	const handlePrefixChange = (value: string) => {
		setPrefix(value)
	}

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

	const maskPhone = (value) => {
		const phoneNumber = value.replace(/\D/g, '')
		return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
	}

	const handlePhoneNumberChange = (phoneNumber) => {
		const formattedPhone = maskPhone(phoneNumber.toString())
		setPhone(formattedPhone)
	}

	const handlePhoneChange = (value) => {
		handlePhoneNumberChange(value)
	}

	return (
		<Row style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
			<Col style={{ width: '350px' }}>
				<h1>Meu Perfil</h1>
				<Form
					layout="vertical"
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item hasFeedback label="Nome" name="username">
						<Input />
					</Form.Item>
					<Form.Item hasFeedback label="Sobrenome" name="lastname">
						<Input />
					</Form.Item>
					<Form.Item hasFeedback label="E-mail" name="email">
						<Input
							disabled
							placeholder="Para alterar, precisa excluir a conta e criar uma nova."
						/>
					</Form.Item>
					<Form.Item hasFeedback label="Telefone" name="phone">
						<InputNumber
							style={{ width: '350px' }}
							addonBefore={
								<Select value={prefix} onChange={handlePrefixChange}>
									<Option value="+55">+55</Option>
									<Option value="+1">+1</Option>
									<Option value="+86">+86</Option>
								</Select>
							}
							formatter={maskPhone}
							value={phone}
							onChange={handlePhoneChange}
							placeholder="apenas números"
							maxLength={15}
						/>
					</Form.Item>
					<Form.Item hasFeedback label="CEP" name="zipcode">
						<Input placeholder="_____-___" />
					</Form.Item>
					<Form.Item hasFeedback label="Endereço" name="address">
						<Input placeholder="Sua rua e número" />
					</Form.Item>
					<Form.Item hasFeedback label="Cidade" name="city">
						<Input placeholder="Sua cidade" />
					</Form.Item>
					<Form.Item hasFeedback label="País" name="country">
						<Input placeholder="Seu país" />
					</Form.Item>
					<Form.Item
						hasFeedback
						label="Senha"
						name="password"
						rules={[{ message: 'Por favor, insira sua senha!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						hasFeedback
						label="Confirmar Senha"
						name="confirm"
						dependencies={['password']}
						rules={[
							{ message: 'Por favor, insira sua senha!' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('As senhas são diferentes!'))
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item>
						{loadings[1] ? (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Salvando
							</Button>
						) : (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Salvar
							</Button>
						)}
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default UserProfile
