import React,{useEffect} from'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/checkout'
import Login from './components/login'
import Payment from './components/payment'
import {auth} from '../src/firebase'
import {useStateValue} from './components/StateProvider'

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
              <Payment/>
            </Route>


         

           
      

    </Switch>
    </Router>

    
    
    </div>
   
  );
}

export default App;
