import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { useLocation } from 'react-router-dom'

function Product({id,title,image,price,rating}) {
    const [{busket}, dispatch] = useStateValue();
    const location = useLocation();
    let addButtonFlag;
    let buttonName;
    if(location.pathname === "/checkout")
        {   
            buttonName = 'Remove From Busket'
            addButtonFlag = false
        }  
    else
        {
            buttonName = 'Add To Busket'
            addButtonFlag = true
        }

    const addToBasket = (...p) => {
        // add to busket
        // console.log(p)
        dispatch({
            type: 'ADD_TO_BUSKET',
            item: {
                id: p[0],
                title: p[1],
                image: p[2],
                price: p[3],
                rating: p[4]
            }
        })
    }

    const removeFromBusket = (id) =>{
        dispatch({
            type: 'REMOVE_FROM_BUSKET',
            item: {
                id:id
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_)=>
                        <p>⭐</p>
                    )}
                </div>
            </div>
            
            <img className="product__image" src={image} />
            <button  onClick={()=> 
                {addButtonFlag ? addToBasket(id,title,image,price,5) :
                removeFromBusket(id)}}
            >
                {buttonName}
            </button>
        </div>
    )
}

export default Product
