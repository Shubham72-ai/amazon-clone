import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
function Subtotal(props) {
	const [{ busket }] = useStateValue();
	return (
		<div className='subtotal'>
			<div>
				<button>place your order</button>
			</div>
			<p>
				<strong>Order Summery</strong>
			</p>
			<p>shs</p>
			{busket.map((_) => (
				<dl className='subtotal__items'>
					<dt>{_.title}</dt> <span>{_.price}</span>
				</dl>
			))}
			<strong>Order Total:</strong> {props.subPrice}
		</div>
	);
}

export default Subtotal;
