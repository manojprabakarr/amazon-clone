import React,{useEffect} from'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/checkout'
import Login from './components/login'
import Payment from './components/payment'
import Order from './components/order'
import {auth} from '../src/firebase'
import {useStateValue} from './components/StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise =loadStripe(
  'pk_test_51IcwODSBygij2i9VXOT7pu3glfG7HYSLJKDhLVVvZrJbbofurzeWlfn6yO47RCXrrrJvptKEIGpvTyZWXdFhBjbT004Xe1zBFi'
  )

function App() {
const [{},dispatch]=useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
    


  },[])
  return (
   
    
    <div className="app">
     <Router> 
   

          <Switch>

          <Route exact path="/">
          <Header/>
            <Home/>
            </Route>

            <Route exact path="/checkout">
              <Header/>
              <Checkout/>

            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/payment">
               <Header/>
               <Elements stripe={promise}>
               <Payment/>

               </Elements>
            
            </Route>

            <Route exact path="/orders">
              <Header/>
              <Order/>

            </Route>


         

           
      

    </Switch>
    </Router>

    
    
    </div>
   
  );
}

export default App;
