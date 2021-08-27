import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const history = useHistory()
    const card=useSelector(state=>state.card)
    const {cardItems}= card;
    return (
        <>
        <img style={{width:"100%",height:"85%",objectFit:'cover'}} src="https://cdn.e-bebek.com/y.ebebek/9971720585246.jpg" alt=""/>
        <div className="header">
        <Link to="/"><img className="logo" src="https://cdn.e-bebek.com/y.ebebek/ebebek-static/pp-preprod/e-logo.svg" alt=""/></Link>
            <div className="centerınput">
              <SearchIcon/>
              <input placeholder="Ne Aramıştınız?"/>
              <button>Ara</button>
           </div>
           <div className="header-right">
                <Link to="/login"><button>Giriş Yap</button></Link>
                <button onClick={()=>history.push('/register')}>Üye Ol</button> 
                
                <Link to="/card?"><AddShoppingCartIcon className="shopıcon"/>
                <span>{cardItems.length}</span></Link>
            </div>
        </div>
        </>
    )
}

export default Header
