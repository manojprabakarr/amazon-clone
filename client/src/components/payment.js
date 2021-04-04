import React,{useState} from 'react'
import './payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './checkoutProduct'
import {Link} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'




function Payment() {
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="payment">
            <div className="payment_container">
            <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address:</h3>

                </div>
                <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>coimbatore</p>
                        <p>Tamil Nadu,india</p>

                </div>
                <div className="payment_section ">
                    <div className="payment_title">
                        <h3>Review items and Delivery</h3>
                        <div className="payment_items">
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

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h1>Payment Method</h1>

                    </div>
                    <div className="payment_details">
                    <form>
                               

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Payment
