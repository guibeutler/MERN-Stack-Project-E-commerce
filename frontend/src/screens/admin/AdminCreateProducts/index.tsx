/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'
import {
	Row,
	Col,
	Button,
	Form,
	Input,
	InputNumber,
	Select,
	Upload,
	Table,
} from 'antd'
import { InboxOutlined, LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'

interface DataType {
	key: React.Key
	name: string
	age: number
	address: string
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
	},
]

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
	},
]

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

const handleChange = (value: string) => {
	console.log(`selected ${value}`)
}

const normFile = (e: any) => {
	console.log('Upload event:', e)
	if (Array.isArray(e)) {
		return e
	}
	return e?.fileList
}

function AdminCreateProducts() {
	const [loadings, setLoadings] = useState<boolean[]>([])
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
						<h1>Cadastro de produto</h1>
					</Col>
				</Row>

				<Form
					layout="vertical"
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item label="Nome" name="name">
						<Input />
					</Form.Item>
					<Form.Item label="Descrição" name="description">
						<Input.TextArea />
					</Form.Item>
					<Form.Item label="Quantidade em estoque" name="countInStock">
						<InputNumber style={{ width: '350px' }} />
					</Form.Item>
					<Form.Item label="Preço" name="price">
						<InputNumber style={{ width: '350px' }} />
					</Form.Item>
					<Form.Item label="Categoria" name="category">
						<Select
							defaultValue="geleias"
							onChange={handleChange}
							options={[
								{ value: 'geleias', label: 'Geléias' },
								{ value: 'kit', label: 'Kit' },
							]}
						/>
					</Form.Item>
					<Form.Item label="Criar nova categoria" name="name">
						<Table columns={columns} dataSource={data} size="small" />
					</Form.Item>
					<Form.Item label="Imagens" name="images">
						<Form.Item
							name="dragger"
							valuePropName="fileList"
							getValueFromEvent={normFile}
							noStyle
						>
							<Upload.Dragger name="files" action="/upload.do" multiple={true}>
								<p className="ant-upload-drag-icon">
									<InboxOutlined />
								</p>
								<p className="ant-upload-text">
									Click or drag file to this area to upload
								</p>
								<p className="ant-upload-hint">
									Support for a single or bulk upload.
								</p>
							</Upload.Dragger>
						</Form.Item>
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
								Cadastrando
							</Button>
						) : (
							<Button
								style={{ width: '350px' }}
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Cadastrar
							</Button>
						)}
					</Form.Item>
				</Form>
				{/* <Alert message="O e-mail já está cadastrado!" type="error" /> */}
			</Col>
		</Row>
	)
}

export default AdminCreateProducts
