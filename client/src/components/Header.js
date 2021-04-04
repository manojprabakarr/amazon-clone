import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from '../firebase'

function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleauthentication=()=> {
        if (user) {
            auth.signOut();
          }
    }


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
                <Link to={!user && '/login'}>             
                 <div onClick={handleauthentication}className="header-option">
                    <span className="header-option1">Hello {!user ? 'Guest' : user.email}</span>

                    <span className="header-option2">{user ? 'Sign Out' : 'Sign In'}    </span>

                </div>
                </Link>
  

                <div className="header-option">
                <span className="header-option1">Returns</span>

                <span className="header-option2">Orders</span>

                </div>

                <div className="header-option">
                <span className="header-option1">Your</span>

                 <span className="header-option2">Prime</span>

                </div>
                <Link to="/checkout">
                <div className="header-optionbasket">
                    <ShoppingBasketIcon/>
                    <span className="header-option2 header-basketcount">
                        {basket?.length}
                    </span>

                </div>
                </Link>
               

            </div>

        </div>

    )
}
export default Header