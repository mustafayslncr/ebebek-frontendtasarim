import React from 'react'
import './Detail.css'
import data from '../data'
import { Link } from 'react-router-dom'


const Detail = (props) => {
    const id = props.match.params.id
    // console.log(id);
    const product = data.products.find(dt=>dt._id===id)

    return (
        <div className="detail" id="detail">
            <img src={product.image} alt="" />
            <div className="right">
                <span style={{marginLeft:10,textTransform:'uppercase'}}>{product.name}</span>
                <span  style={{marginLeft:10,fontFamily:'cursive',fontWeight:'bold',marginTop:10}}>{product.description}</span>
                <span className="price">{product.price} TL</span>
                <Link to={`/card/${product._id}`}><button>
                    <div>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <span>Sepete Ekle</span>
                </button>
                </Link>

                <button style={{marginTop:10,backgroundColor:'green'}}>
                 <Link style={{color:'white'}} to="/"> <span>Anasayfaya Dön</span></Link>
            </button>

            </div>
        </div>
    )
}

export default Detail
