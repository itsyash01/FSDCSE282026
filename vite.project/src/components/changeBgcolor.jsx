import { useState } from 'react'

function ChangeBgColor() {
	const [backgroundColor, setBackgroundColor] = useState('100')
	const [red, setRed] = useState('255')
	const [green, setGreen] = useState('0')
	const [blue, setBlue] = useState('0')

	return (
		<div
			style={{
				backgroundColor:
					backgroundColor === '100' ? `rgb(${red}, ${green}, ${blue})` : backgroundColor,
				border: '4px solid black',
				height: '200px',
				width: '400px',
				padding: '20px',
			}}
		>
			<h2>Choose a Color</h2>
			<button
				style={{ backgroundColor: 'red' }}
				onClick={() => {
					setRed('255')
					setGreen('0')
					setBlue('0')
					setBackgroundColor('rgb(255, 0, 0)')
				}}
			>
				Red
			</button>
			<button
				style={{ backgroundColor: 'green' }}
				onClick={() => {
					setRed('0')
					setGreen('128')
					setBlue('0')
					setBackgroundColor('rgb(0, 128, 0)')
				}}
			>
				Green
			</button>
			<button
				style={{ backgroundColor: 'blue' }}
				onClick={() => {
					setRed('0')
					setGreen('0')
					setBlue('255')
					setBackgroundColor('rgb(0, 0, 255)')
				}}
			>
				Blue
			</button>
		</div>
	)
}

export default ChangeBgColor
