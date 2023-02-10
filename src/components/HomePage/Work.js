import React from 'react';
import './Work.scss'

export default function Work() {
    return (
        <section className='work'>
            <div className='container'>
                <div>
                    <h4 className='work-desc'>Our Process</h4>
                    <h3 className='work-title'>How We Work</h3>
                </div>
                <div className='work-cards'>
                    <div className='work-card'>
                        <p>01</p>
                        <img src={process.env.PUBLIC_URL +'/assets/images/Home/bread-work.png'} alt='work-bred' class='work-card__img'/>
                        <h5>Contact</h5>
                        <span>Nothing the copy said could convince her and so it didn’t take long.</span>
                    </div>
                    <div className='work-card'>
                        <p>02</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Home/bread-work.png'} alt='work-bred'
                             className='work-card__img'/>
                        <h5>Baking</h5>
                        <span>Nothing the copy said could convince her and so it didn’t take long.</span>
                    </div>
                    <div className='work-card'>
                        <p>03</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Home/bread-work.png'} alt='work-bred'
                             className='work-card__img'/>
                        <h5>Delivery</h5>
                        <span>Nothing the copy said could convince her and so it didn’t take long.</span>
                    </div>
                    <div className='work-card'>
                        <p>04</p>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Home/bread-work.png'} alt='work-bred'
                             className='work-card__img'/>
                        <h5>Tasty</h5>
                        <span>Nothing the copy said could convince her and so it didn’t take long.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
