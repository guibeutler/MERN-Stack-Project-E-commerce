import React from 'react'
import { Slider } from 'antd'

function PriceFilter() {
	return (
		<>
			<span>Filtro por valor</span>
			<br />
			<span>Ate: R$ 300,00</span>
			<Slider min={10} max={500} step={10} />
		</>
	)
}
export default PriceFilter
