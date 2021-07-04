import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            
            <div className="home__row">
                <Product 
                    title='Oculus Quest 2' 
                    price={299.00} 
                    image="https://m.media-amazon.com/images/I/519XvHWeb9S._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={5}/>
                <Product />
            </div>

            <div className="home__row">
                
            </div>

            <div className="home__row">
                
            </div>

            </div>
        </div>
    )
}

export default Home
