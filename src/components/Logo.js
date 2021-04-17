import React from 'react'
import {Link} from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/" className="logo_link">
			<div className="logo">
				<span className="logo_part1">Food</span>
				<span className="logo_part2">Delivery</span>
			</div>
		</Link>
	)
}
