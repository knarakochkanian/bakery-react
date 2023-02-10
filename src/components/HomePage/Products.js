import React from "react";
import './Products.scss'

export default function Products() {
    return (
        <section className='products'>
            <div className='title-top'>Our Products</div>
            <div className='title'>Baked Fresh <br/> Every Morning</div>
            <div className='products-grid-container'>
                <div className='products-grid-item item1'><img src={process.env.PUBLIC_URL +'/assets/images/Home/product1.png'} alt='product1'/>

                    </div>
                <div className='products-grid-item item2'>
                    <img src={process.env.PUBLIC_URL +'/assets/images/Home/product2.png'} alt='product2'/>
                    <div className='products-grid-item__title'>Bakery</div>
                    <div className='products-grid-item__box'>
                        <span className='products-grid-item__box-title'>Bread</span>
                        <span className='products-grid-item__box-price'>$5</span>
                    </div>

                </div>
                <div className='products-grid-item item3'><img src={process.env.PUBLIC_URL +'/assets/images/Home/product3.png'}alt='product3'/>
                    <div className='products-grid-item__title'>Bakery</div>
                    <div className='products-grid-item__box'>
                        <span className='products-grid-item__box-title'>Cupcake</span>
                        <span className='products-grid-item__box-price'>$3</span>
                    </div>
                </div>
                <div className='products-grid-item item4'><img src={process.env.PUBLIC_URL +'/assets/images/Home/product4.png'} alt='product4'/>
                    <div className='products-grid-item__title'>Sweet</div>
                    <div className='products-grid-item__box'>
                        <span className='products-grid-item__box-title'>Biscuits</span>
                        <span className='products-grid-item__box-price'>$5</span>
                    </div>
                </div>
                <div className='products-grid-item item5'>
                    <img src={process.env.PUBLIC_URL +'/assets/images/Home/product5.png'} alt='product5'/>
                    <div className='products-grid-item__title'>Pastry</div>
                    <div className='products-grid-item__box'>
                        <span className='products-grid-item__box-title'>Brioche</span>
                        <span className='products-grid-item__box-price'>$7</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

