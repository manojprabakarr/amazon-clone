import React from 'react'
import './chechoutproduct.css'

function checkoutProduct({id,title,image,price,rating}) {
    return (
        <div className="checkoutProduct">
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
                <button>Remove from Basket</button>

            </div>
            
        </div>
    )
}

export default checkoutProduct
