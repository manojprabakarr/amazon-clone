import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,price,image,rating}) {

    const [{basket},dispatch]=useStateValue(); 
    console.log('this basket',basket)
 const Addtobasket=()=> {
     dispatch({
         type: 'ADD_TO_BASKET',
         item: {
             id: id,
             title:title,
             image:image,
             price:price,
             rating:rating,
         }
     })
     
 }
    
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

            </div>
            <div className="product-rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>

                ))}
          
            
             
            
            
          
            </div>
            <img className="product-img"
            src={image}
            alt=""/>

            <button onClick={Addtobasket} >Add to Basket</button>

            
        </div>
    )
}

export default Product
