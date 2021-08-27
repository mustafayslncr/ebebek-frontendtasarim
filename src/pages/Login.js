import React from 'react';
import './Login.css';


const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Giriş Yap</span>
            <form  className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="E-postanızı giriniz" />
                <label>Şifre</label>
                <input type="password" className="loginInput" placeholder="Parolanızı giriniz" />
                
                <button  className="loginButton">Giriş Yap</button>
            </form>
          
        </div>
    )
}

export default Login
