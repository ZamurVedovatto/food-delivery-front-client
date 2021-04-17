
import React from 'react'
import CartIcon from './CartIcon';
import Logo from "./Logo";

export default function Header() {
	return (
		<div className="header_shadow">
			<div className="container">
				<header>
					<Logo />
					<CartIcon />
				</header>
			</div>
		</div>
	)
}
