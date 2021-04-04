import React from 'react'
import './checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './subtotal'
import CheckoutProduct from './checkoutProduct'

function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div  className="checkout-left">
                <img 
                className="checkout-img"
                src="https://static.toiimg.com/thumb/msid-78732001,width-1200,height-900,resizemode-4/.jpg"
                alt=""
                />

                <div>
                    <h3>Hello ,{ user?.email}</h3>
                    <h2 className="checkout_list">Your Shopping Basket</h2>
                    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
                </div>


            </div>
            <div className="checkout-right">
                <Subtotal/>

            </div>
          
            
        </div>
    )
}

export default Checkout
