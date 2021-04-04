import React from 'react'
import './Home.css'
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

                <Product 
                id="100"
                title="The lean Startup"
                 price="19.50" 
                image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
                rating={4}/>

                <Product 
                id="101"
                title="iphone 11 pro"
                price="30"
                image="https://assets.swappie.com/iPhone-11-Pro-gold-back.png"
                rating={5}/>

                </div>

                <div className="home-row">
                    <Product 
                    id="102"
                    title="apple macbook pro"
                    price="250"
                    image="https://www.zdnet.com/a/hub/i/r/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/thumbnail/770x433/5f1b7f881bfb80a9f2bbe02bc6d64b49/apple-macbook-pro-m1-2020-5.jpg"
                    rating={5}/>
                    <Product 
                    id="103"
                    title="samsung j7 prime"
                    price="18.5"
                    image="https://assets.mspimages.in/wp-content/uploads/2016/09/Samsung_Galaxy_J7_Prime_Dynamic_Gold_04.jpeg"
                    rating={3}
                    />
                    <Product
                    id="104"
                    title="Boat wireless speaker"
                    price="100"
                    image="data:image/jpeg;base64,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"
                    rating={4}/>
                    

                </div>

                <div className="home-row">
                    <Product
                    id="105"
                    title="mi laptop"
                    price="40"
                    image="https://images.news18.com/ibnlive/uploads/2020/06/1591879020_mi-notebook-14-horizon-edition-1.jpg"
                    rating={4}/>  
                    

                </div>

              

            </div>

        </div>
    )
}
export default Home