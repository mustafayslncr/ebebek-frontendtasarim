import React from 'react'
import './Home.css'
import Sidebar from '../components/Sidebar'
import Urun from '../components/Urun'


const Home = () => {
    return (
        <div className="home">
       <div className="homedetay">
          <Sidebar />
          <Urun />
       </div>   
        </div>
    )
}

export default Home
