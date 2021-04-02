import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return(
        <div className="header">
           <img className="header-logo"
           src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" 
           alt=""/>     

            <div className="header-search">
                <input type="text"
                className="header-inputsearch"

                />
                <SearchIcon  className="header-searchicon"/>

            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option1">Hello Guest</span>

                    <span className="header-option2">Sign</span>

                </div>

                <div className="header-option">
                <span className="header-option1">Returns</span>

                <span className="header-option2">Orders</span>

                </div>

                <div className="header-option">
                <span className="header-option1">Your</span>

                 <span className="header-option2">Prime</span>

                </div>
                <div className="header-optionbasket">
                    <ShoppingBasketIcon/>
                    <span className="header-option2 header-basketcount">0</span>

                </div>

            </div>

        </div>

    )
}
export default Header