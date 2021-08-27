import React from 'react'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [exit,setExit] =useState(false)
    
    return (
        <div className="sidebar">
            <div className="sidebarmenu">
        <ul>
            <li>
               <i class="fas fa-tshirt"></i>
               <span>Giyim & Tekstil</span> 
            </li>
            <li>
               <i class="fab fa-nutritionix"></i>
               <span>Bebek Odası</span> 
            </li>

            <li>
            <i class="fas fa-mitten"></i>
               <span>Bez & Mendil</span> 
            </li>
            <li>
            <i class="fas fa-book"></i>
               <span>Banyo & Bakım</span> 
            </li>
            <li>
            <i class="fas fa-gamepad"></i>
               <span>Oyuncak & Kitap</span> 
            </li>
            <li>
            <i class="fas fa-baby-carriage"></i>
               <span>Araç & Gereç</span> 
            </li>
            <li>
            <i class="fas fa-utensils"></i>
               <span>Beslenme</span> 
            </li>
            <li>
            <i class="fas fa-wine-bottle"></i>
               <span>Emzirme</span> 
            </li>
            <li>
            <i class="fas fa-file-signature"></i>
               <span>Güvenlik</span> 
            </li>
            <li style={{position:'relative'}}>
               <span className="mavi"></span>
                  <span onClick={()=>setExit(true)} >İnternete Özel</span>
                  {
                     exit && <div>
                        <p style={{display:'inline',position:'absolute',left:'100%',width:350,height:'auto',background:'whitesmoke',border:'1px solid whitesmoke',color:'black',borderRadius:10,zIndex:500 }}>
                     <div>
                     <button onClick={()=>setExit(false)} className="kapat">X</button>
                     </div>
                     <div>
                     <img src="https://st2.depositphotos.com/1015568/6454/v/600/depositphotos_64549027-stock-illustration-baby-shop-logo.jpg" alt=""/>
                     <span>Bebek Giyim</span>
                     </div>
                     <div>
                     <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                     <span>Oyuncaklar</span>
                     </div>
                     <div>
                     <img src="https://www.gencgrafiker.com/wp-content/uploads/2013/09/bebek-temal%C4%B1-logo-24.gif" alt=""/>
                     <span>Bebek Yatak</span>
                     </div>
                     <div>
                     <img src="https://i.pinimg.com/236x/45/4c/2e/454c2e478358a44ee723346ba4052543.jpg" alt=""/>
                     <span>Bebek Maması</span>
                     </div>
                     <div>
                     <img src="https://d1hzl1rkxaqvcd.cloudfront.net/contest_entries/1823579/_300px/93b281c3fbb5e91a24cd7a394c25e185.jpg" alt=""/>
                     <span>Fırsatlar</span>
                     </div>
                     <div>
                     <img src="https://w7.pngwing.com/pngs/876/139/png-transparent-child-mother-mother-and-baby-supplies-people-logo-infant.png" alt=""/>
                     <span>Ebeveyn</span>
                     </div>
                   </p>
                     </div>
                  } 
                  
               </li>
               <li>
               <span className="kirmizi"></span>
                  <span>Yeni Ürünler</span> 
               </li>
               <li>
               <span className="yesil"></span>
                  <span>Kampanyalar</span> 
               </li>
               <li>
               <span className="turuncu"></span>
                  <span>Outlet</span> 
               </li>
               <li>
               <span className="gri"></span>
                  <span>Mağazalar</span> 
               </li>
        </ul>
        </div>
     </div>
    )
}

export default Sidebar
