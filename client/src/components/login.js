import React,{useState} from 'react'
import './login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from '../firebase'

function Login() {
    const history =useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login= e => {
        e.preventDefault();
        auth.
        signInWithEmailAndPassword(email,password)
        .then (auth => {
            history.push('/')
        })
        .catch(err =>alert(err.message))


    }

    const register= e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(err =>alert(err.message))
    }
    return (
        <div className="login">
            <Link to="/">
           
            <img className="login-logo"
           src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" 
           alt=""/> 
         </Link>

         <div className="login-form">
             <h1>Sign-in</h1>
             <form>
                 <h5>Email</h5>
                 <input type="email"value={email} onChange={e => setEmail(e.target.value)}/>

                 <h5>password</h5>
                 <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                 <button className="login-btn" type="submit" onClick={login}>Sign-in</button>

                 <p>
                 By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.

                 </p>

                 <button onClick={register} className="login-account">Create Amazon Account</button>



             </form>

         </div>
            
        </div>
    )
}

export default Login
