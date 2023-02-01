import React from 'react'
import { Checkbox, Col, Row } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

function CategoryFilter() {
	const options = [
		{ label: 'Kits', value: 'kits' },
		{ label: 'Geleias', value: 'geleias' },
	]
	const onChange = (chekedValues: CheckboxValueType[]) => {
		console.log(chekedValues)
	}

	return (
		<Row style={{ display: 'flex', flexDirection: 'column' }}>
			<Col>
				<span>Categorias</span>
				<br />
				<Checkbox.Group options={options} onChange={onChange} />
			</Col>
		</Row>
	)
}
export default CategoryFilter
