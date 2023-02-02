import React from 'react'
import { Select, Space } from 'antd'

function SortOptions() {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<Space wrap>
			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: 'price_1', label: 'Menor Valor' },
					{ value: 'price_-1', label: 'Maior Valor' },
					{ value: 'rating_-1', label: 'Classificacao' },
					{ value: 'name_1', label: 'Nome A-Z' },
					{ value: 'name_-1', label: 'Nome Z-A' },
				]}
			/>
		</Space>
	)
}
export default SortOptions
