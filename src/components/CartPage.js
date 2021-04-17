import React, { useState } from 'react'
import CartEmpty from './CartEmpty'

export default function CartPage() {
	const [cartEmpty, setCartEmpty] = useState(true)

	return (
		<div className="container">
			<div className="cartCenter">
				{/* { cartEmpty ? (<CartEmpty />) : (<Cart />) } */}
				<CartEmpty />
			</div>
		</div>
	)
}
