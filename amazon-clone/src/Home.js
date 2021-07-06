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
                    id="1"
                    title='Oculus Quest 2' 
                    price={299.00} 
                    image="https://m.media-amazon.com/images/I/519XvHWeb9S._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={5}/>
                <Product
                    id="2"
                    title='SAMSUNG Odyssey G7 Series 32-Inch' 
                    price={698.00} 
                    image="https://m.media-amazon.com/images/I/61Y8YS+rAKL._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={5}/>
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Lenovo Flex 5 14 2-in-1 Laptop"
                    price={603.35}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="4"
                    title="Vont 2 Pack LED Camping Lantern"
                    price={17.97}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51OSKuKLzQL.jpg"
                />
                <Product
                    id="5"
                    title="ANBEGE Gaming Chair"
                    price={109.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61UHtHtnrLS._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series"
                    price={399.999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SX679_.jpg"
                />
            </div>

            </div>
        </div>
    )
}

export default Home
