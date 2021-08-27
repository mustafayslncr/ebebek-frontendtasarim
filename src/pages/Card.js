
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { cardAction, removeAction } from '../redux/actions/cardAction'
import './Card.css'

const Card = (props) => {
    
    const productId=props.match.params.id
      const dispatch=useDispatch()
      const card=useSelector(state=>state.card)
      const {cardItems}=card
     // console.log("cardItems",cardItems)
       useEffect(()=>{
        if(productId){
            dispatch(cardAction(productId))
        }
       },[dispatch,productId])


        const removeFromCardHandler=(id)=>{
            dispatch(removeAction(id))
        }
          
           
        
            var sum = cardItems.reduce(function(a, b){
                a += b['price'];
                return a;
              },0)
    return (


        <div className="cardscreen">
            {
            cardItems.length === 0 ? (
                <Message/>
            ) :
            (
                   cardItems.map(card=>(
                     <div key={card.id} className="card-in">
                         <img src={card.image} alt=""/>
                          <p>{card.name}</p>
                          <p>{card.price} TL</p>
                          <button onClick={()=>removeFromCardHandler(card.id)}>Ürünü Sil</button>
                     </div>
                 ))
                )
            }

           
             { cardItems.length>0 &&
             <div className="total-genel">
             <div className="total">
                <h5>Ürün Miktarı: <strong>{cardItems.length}</strong> </h5>
                <h5>Toplam Tutar: <strong>{sum} TL</strong> </h5>
                <h5>{sum > 75 ? <span>Kargo Tutarı : <strong> 0 TL</strong> </span> : <span>Kargo Tutarı :<strong> 20 TL</strong></span>}</h5>
                <h5>Ödenecek Miktar: <strong>{sum > 75 ? sum : sum+20} TL</strong> </h5>
                <button>Ödeme Yapın</button>
             </div>
             </div>
             }
           
              
        </div>
       
    )
}

export default Card