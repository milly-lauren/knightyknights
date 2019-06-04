{/* This is the Login Page (App.js)
    To Do: Link the information inputed to the database
 */}

import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <header className="Header">
        <h2>Welcome to KnightyKnights</h2>
      </header>
      
      <header className="Box">
        <h1>Sign In</h1>
        <p>Email</p>
        <input type="text" name="email" placeholder="Email"/>
        <p>Password</p>
        <input type="password" name="passwrod" placeholder="Passowrd"/>
        <input type="submit" name="submit" placeholder="Login"/>
      
        <button
          className="App-link"
          href="./SignUp.js"
          rel="noopener noreferrer"
        >Sign Up</button>
      
      </header>
    </div>
  );
}


export default App;

{/* This is the Login Page Desgin (App.css) */}


.App {
    text-align: center;
    background: url(backk.jpg);
    background-size: cover;
    background-position: center;
}


.Header
{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    
    width: 550px;
    height: 180px;
    
    top: 50%;
    left: 30%;

    margin: 0;
    padding: 0 0 10px;
    text-align: center;
    font-size: 38px;
    text-shadow: 0px 1.5px 0px rgba(255,255,255,.86);
    
}

.Box button
{
    border: none;
    outline: none;
    
    
    width: 35%;
    margin-bottom: 0px;
    margin-left: 25px;
    
    background: white;
    color: black;
    box-shadow:2px 3px 11px #CED5D9;
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    position: center;
    text-decoration: none;
}

.Box
{
    width: 280px;
    height: 285px;
    background: linear-gradient(black, #414345);
    color: #fff;
    top: 50%;
    left: 70%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-shadow: 6px 13px 8px #444C54;
    border: 1px solid black;
    border-radius: 12px;
    padding: 30px 40px;
    text-shadow: 0px .5px 0px rgba(48,38,38,.86);
    
    
    text-align: left;
    font-size: 16px;
}

.Box p
{
    font-size: 18px;
    text-shadow: 0px .5px 0px rgba(48,38,38,.86);
    text-align: left;
}

.Box h1
{
    margin: 8px;
    padding: 0 0 0px;
    text-align: center;
    font-size: 30px;

}

.Box input[type="text"], input[type="password"]
{
    width: 100%;
    margin-bottom: 10px;
    margin-left: 0px;
    
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 25px;
    color: #fff;
    font-size: 12px;
    align-content: center;
}

.Box input[type = "submit"]
{
    border: none;
    outline: none;
    
    width: 35%;
    margin-bottom: 0px;
    margin-left: 30px;
    
    background: white;
    color: black;
    box-shadow:2px 3px 11px #CED5D9;
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    
    position: center;
    
}

.Box input[type="submit"]:hover
{
    animation-fill-mode: forwards;
    background: #CED5D9;
}

.Box button:hover
{
    animation-fill-mode: forwards;
    background: #CED5D9;
}




{/* This is the SignUp Page (SignUp.js)
    To Do: Link the information inputed to the database
 */}
 
 
 import React from 'react';
import './App2.css';

class Login extends React.Component{
    state = 
    {
        name:''
        email:'',
        password:''
    }
}


function App() {
  return (
    <div className="SignUp">
      
      <header className="Header">
        <p>Welcome to the Kingdom</p>
      </header>
      <header className="Box">
        <h1>Sign Up</h1>
        <p>Name</p>
        <input type="text" name="name" placeholder="Name"/>
        <p>Email</p>
        <input type="text" name="email" placeholder="Email"/>
        <p>Password</p>
        <input type="password" name="passwrod" placeholder="Passowrd"/>
        <input type="submit" name="submit" value="Submit"/>
      
      
      
      </header>
    </div>
  );
}

export default App;


{/* This is the Login Page Desgin (App2.css) */}
.App {
    text-align: center;
    background: url(backk.jpg);
    background-size: cover;
    background-position: center;
}


.Header
{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    
    margin: 150 10 10px;
    padding: 0 0 0px;
    text-align: center;
    font-size: 50px;
    text-shadow: 0px 1.5px 0px rgba(255,255,255,.86);
    
}


.Box
{
    width: 280px;
    height: 250px;
    background: linear-gradient(black, #414345);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-shadow: 6px 13px 8px #444C54;
    border: 1px solid black;
    border-radius: 12px;
    padding: 30px 40px;
    text-shadow: 0px .5px 0px rgba(48,38,38,.86);
    
    
    text-align: left;
    font-size: 16px;
}

.Box p
{
    font-size: 18px;
    text-shadow: 0px .5px 0px rgba(48,38,38,.86);
    text-align: left;
}

.Box h1
{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 24px;

}

.Box input[type="text"], input[type="password"]
{
    width: 100%;
    margin-bottom: 10px;
    margin-left: 0px;
    
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 25px;
    color: #fff;
    font-size: 12px;
    align-content: center;
}

.Box input[type = "submit"]
{
    border: none;
    outline: none;
    
    width: 35%;
    margin-bottom: 20px;
    margin-left: 35px;
    
    background: white;
    color: black;
    box-shadow:2px 3px 11px #CED5D9;
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    
    position: center;
    
}

.Box input[type="submit"]:hover
{
    animation-fill-mode: forwards;
    background: #CED5D9;
}



