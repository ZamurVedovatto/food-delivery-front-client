import React, { useState } from 'react'
import CartEmpty from './CartEmpty'
import Cart from './Cart'

export default function CartPage() {
	const [cartEmpty, setCartEmpty] = useState(false)

	return (
		<div className="container">
			<div className="cartCenter">
				{ cartEmpty ? (<CartEmpty />) : (<Cart />) }
				{/* <CartEmpty /> */}
			</div>
		</div>
	)
}
