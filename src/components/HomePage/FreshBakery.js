import React from "react";
import "./FreshBakery.scss";

export default function FreshBakery() {
    return (
        <section className='fresh-bakery'>
            <div className='fresh-bakery-left'>
                <img src='/assets/images/Home/bread.png'  className='fresh-bakery-left__bread' alt='bread' />
                <div className='fresh-bakery-left__sience title-top'>
                    Sience 1984
                </div>
                <div className='fresh-bakery-left__title title'>
                    <img src='/assets/images/Home/points.png' alt='points' className='fresh-bakery-left__points' />
                    Fresh Bakery Every Day</div>
                <div className='fresh-bakery-left__description'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost.
                </div>
            </div>
            <div className='fresh-bakery-right'>
                <img src='/assets/images/Home/Background.png' alt='fresh'/>
            </div>
        </section>
    );
}

