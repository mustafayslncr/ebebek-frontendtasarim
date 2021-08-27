import React from 'react'
import './Urun.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Urunler from './Urunler';

const Urun = () => {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="urun">
            <div className="kategori-bar">
              <div className="kategori-detay">
                <img src="https://w7.pngwing.com/pngs/428/279/png-transparent-computer-icons-web-page-identity-angle-text-logo.png" alt=""/>
                <span>İnternete Özel</span>
              </div>

              <div className="kategori-detay">
                <img src="https://i.pinimg.com/236x/45/4c/2e/454c2e478358a44ee723346ba4052543.jpg" alt=""/>
                <span>Çok Satanlar</span>
              </div>

              <div className="kategori-detay">
                <img src="https://www.gencgrafiker.com/wp-content/uploads/2013/09/bebek-temal%C4%B1-logo-24.gif" alt=""/>
                <span>İhtiyaç Listesi</span>
              </div>

              <div className="kategori-detay">
                <img src="https://w7.pngwing.com/pngs/876/139/png-transparent-child-mother-mother-and-baby-supplies-people-logo-infant.png" alt=""/>
                <span>Emziren Anne</span>
              </div>

              <div className="kategori-detay">
                <img src="https://st2.depositphotos.com/1015568/6454/v/600/depositphotos_64549027-stock-illustration-baby-shop-logo.jpg" alt=""/>
                <span>İlk Hediyem</span>
              </div>


              <div className="kategori-detay">
                <img src="https://st4.depositphotos.com/6027682/29222/v/450/depositphotos_292227802-stock-illustration-cute-little-smiling-baby-blank.jpg" alt=""/>
                <span>Baby Me</span>
              </div>

              <div className="kategori-detay">
                <img src="https://www.orjinbaby.com/Uploads/EditorUploads/outlet-urunleri.jpeg" alt=""/>
                <span>Outlet</span>
              </div>

              <div className="kategori-detay">
                <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                <span>Baby Toys</span>
              </div>

              <div className="kategori-detay">
                <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/32607783926495.Y3JvcCwxNjY3LDEzMDMsMCwxODE.jpg" alt=""/>
                <span>HelloBaby</span>
              </div>

              <div className="kategori-detay">
                <img src="https://d1hzl1rkxaqvcd.cloudfront.net/contest_entries/1823579/_300px/93b281c3fbb5e91a24cd7a394c25e185.jpg" alt=""/>
                <span>Yeni Gelenler</span>
              </div>

              <div className="kategori-detay">
                <img src="https://media.istockphoto.com/vectors/baby-logo-template-vector-id657948974?s=612x612" alt=""/>
                <span>Bebek Body</span>
              </div>
           </div>
           <hr style={{marginTop:-5}}/>
            <div className="slider">
            <Slider className="slider-detay" {...settings}>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971718389790.jpg" alt=""/>
        </div>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971226607646.jpg" alt=""/>
        </div>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971930693662.jpg" alt=""/>
        </div>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971279560734.jpg" alt=""/>
        </div>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971273433118.jpg" alt=""/>
        </div>
        <div>
            <img src="https://cdn.e-bebek.com/y.ebebek/9971276611614.jpg" alt=""/>
        </div>
          
        </Slider>
        <Urunler />

            </div>
        </div>
    )
}

export default Urun
