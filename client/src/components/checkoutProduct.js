import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const removebasket=()=> {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct-image" src={image} alt=""/>

            <div className="checkoutproduct-info">
                <p className="checkoutproduct-title">{title}</p>
                <p className="checkoiutproduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>

                ))}

                </div>
                <button onClick={removebasket}>Remove from Basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
