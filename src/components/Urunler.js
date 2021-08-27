import React from 'react'
import './Urunler.css'
import data from '../data'
import { Link } from 'react-router-dom'

const Urunler = () => {
    return (
        <div className="urunler">
            <h4>AYAKKABI</h4>
            <div className="urunlerbir">
            {data.products.filter(dt=>dt.kategori.includes('ayakkabı')).map(dt=>(
                <div className="urunleriki" key={dt._id}>
                    <Link to={`/detail/${dt._id}`}><img src={dt.image} alt="" /></Link>
                    <span className="urunadi">{dt.name}</span>
                    <p>{dt.price} TL</p>
                    <button>Sepete Ekle</button>
                </div>
            ))}
            </div>
            <h4>BESLENME</h4>
            <div className="urunlerbir">
                {
                    data.products.filter(dt=>dt.kategori.includes('beslenme')).map(dt=>(
                        <div className="urunleriki" key={dt._id}>
                            <Link to={`/detail/${dt._id}`}><img src={dt.image} alt="" /></Link>
                            <span className="urunadi">{dt.name}</span>
                            <p>{dt.price} TL</p>
                            <button>Sepete Ekle</button>
                        </div>
                    ))
                }
            </div>
            <h4>GİYİM</h4>
            <div className="urunlerbir">
                {
                    data.products.filter(dt=>dt.kategori.includes('giyim')).map(dt=>(
                        <div className="urunleriki" key={dt._id}>
                            <Link to={`/detail/${dt._id}`}><img src={dt.image} alt="" /></Link>
                            <span className="urunadi">{dt.name}</span>
                            <p>{dt.price} TL</p>
                            <button>Sepete Ekle</button>
                        </div>
                    ))
                }
            </div>
            <h4>OYUNCAK</h4>
            <div className="urunlerbir">
                {
                    data.products.filter(dt=>dt.kategori.includes('oyuncak')).map(dt=>(
                        <div className="urunleriki" key={dt._id}>
                            <Link to={`/detail/${dt._id}`}><img src={dt.image} alt="" /></Link>
                            <span className="urunadi">{dt.name}</span>
                            <p>{dt.price} TL</p>
                            <button>Sepete Ekle</button>
                        </div>
                    ))
                }
            </div>
            <h4>BEZ</h4>
            <div className="urunlerbir">
                {
                    data.products.filter(dt=>dt.kategori.includes('bez')).map(dt=>(
                        <div className="urunleriki" key={dt._id}>
                            <Link to={`/detail/${dt._id}`}><img src={dt.image} alt="" /></Link>
                            <span className="urunadi">{dt.name}</span>
                            <p>{dt.price} TL</p>
                            <button>Sepete Ekle</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Urunler
