import React from 'react';
import logo from './amazon-wall.png';
import './Checkout.css';
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
	const [{ busket }] = useStateValue();
	let totalPrice = 0;
	console.log('che->', busket);
	return (
		<div className='checkout'>
			<div className='checkout__right'>
				<img src={logo} className='checkout__logo' />
				{busket.length > 0 ? (
					<div className='chekout__subtotal'>
						<span style={{ display: 'none' }}>
							{busket.map((_) => (totalPrice += _.price))}
						</span>
						<Subtotal subPrice={totalPrice} />
					</div>
				) : (
					''
				)}
			</div>
			{busket?.length === 0 ? (
				<div className='checkout__empty'>
					<div>empty cart</div>
				</div>
			) : (
				<div className='checkout__left'>
					{busket.map((o, i) => (
						<Product
							key={o.id}
							title={o.title}
							image={o.image}
							price={o.price}
							rating={5}
							id={o.id}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Checkout;
