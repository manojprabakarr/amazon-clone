import React from 'react'
import './product.css'

function product() {
    return (
        <div className="product">
            <div className="product-info">
                <p>The intelligent investor</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>25</strong>
                </p>

            </div>
            <div className="product-rating">
              <p className="fa fa-star"></p>
              <p className="fa fa-star"></p>
            
          
            </div>
            <img className="product-img"
            src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt=""/>

            <button >Add to Basket</button>

            
        </div>
    )
}

export default product
