import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className="register">
           
        <span className="registerTitle">Üye Ol</span>
    <form  className="registerForm">
        <label>Kullanıcı Adı</label>
        <input type="text" className="registerInput" placeholder="Kullanıcı Adınızı giriniz" />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="E-postanızı Giriniz" />
        <label>Şifre</label>
        <input type="password" className="registerInput" placeholder="Parolanızı giriniz" />
        <button className="registerButton">Üye Ol</button>
    </form>
    </div>

    )
}

export default Register
