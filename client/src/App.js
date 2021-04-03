import React from'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/checkout'

function App() {
  return (
    
    <div className="app">
     <Router> 
    <Header/>

          <Switch>

          <Route exact path="/" component={Home}/>


           <Route path="/checkout" component={Checkout}/>
      

    </Switch>
    </Router>

    
    
    </div>
   
  );
}

export default App;
