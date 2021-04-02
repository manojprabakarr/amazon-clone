import React from 'react'
import './Home.css'
import product from './product'
import Product from './product'

function Home() {
    return(
        <div className="home">
            <div className="home-container">
                <img 
                className="home-image"
                src="https://i.ytimg.com/vi/mObOQrxM4nA/maxresdefault.jpg"
                alt=""
                />

                <div className="home-row">
                <Product/>
                <Product/>

                </div>

                <div className="home-row">
                    <Product/>
                    <Product/>
                    <Product/>
                    

                </div>

                <div className="home-row">
                    <Product/>  
                    

                </div>

              

            </div>

        </div>
    )
}
export default Home