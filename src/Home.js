import React, { useState, useEffect } from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    const [prods,setProds] = useState(null)
    async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products")
        setProds(await response.json())
    }

    useEffect(() =>{
        fetchProducts()
    },[])

    if(!prods){
        return 'loading'
    }
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            {/* prduct id,title,price,rating,image */}
            <div className="home__row">
                {prods.map((o,i)=>
                    // console.log(typeof o.id)
                    <Product 
                        key = {o.id}
                        title={o.title}
                        image={o.image}
                        price={o.price}
                        rating={5}
                        id={o.id}
                    />
                )}
                
            </div>

            {/* product */}
        </div>
    )
}

export default Home
