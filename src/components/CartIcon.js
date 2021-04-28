import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function CartIcon() {
	const badgeNumber = useSelector((state) => state.cart.items.length)
	console.log("carrinho numero", badgeNumber)
	// let itemsCount = this.props.cart.reduce((acc, item) => acc + item.qty, 0);

	return (
		<Link to="/cart">
			<div className="cartIcon">
				<i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
				{badgeNumber > 0 &&
					<div className="cartBadge">
						{badgeNumber}
					</div>
				}
			</div>
		</Link>
	)
}
