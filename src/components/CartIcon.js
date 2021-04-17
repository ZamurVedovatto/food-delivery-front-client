import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function CartIcon() {
	// let itemsCount = this.props.cart.reduce((acc, item) => acc + item.qty, 0);
	const [itemsCount, setItemsCount] = useState(1) // TODO calcular

	return (
		<Link to="/cart">
			<div className="cartIcon">
				<i className="fa fa-shopping-cart" aria-hidden="true"></i>
				{itemsCount > 0 &&
					<div className="cartBadge">
						{itemsCount}
					</div>
				}
			</div>
		</Link>
	)
}
