import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <div style={{height:"500px",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <span style={{marginBottom:30,fontSize:20}}>Sepetinizde Ürün Bulunmamaktadır. <Link style={{textDecoration:'none',color:'tomato'}} to="/">AnaSayfa</Link> </span>
            <img style={{width:250,height:250}} src="https://www.mebders.com/upload/409681a70f7.png" alt=""/>
        </div>
    )
}

export default Message