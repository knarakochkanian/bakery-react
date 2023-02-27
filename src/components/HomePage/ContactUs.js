import React from "react";
import './ContactUs.scss';

export default function ContactUs() {
    return (
        <section className='contact-us'>
            <div className='container'>
                <div className='contact-us-images'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/bread-contacts.png'} alt='bread-contacts'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/backgr-contacts.png'}
                         alt='backgr-contacts'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/backgr-contacts2.png'}
                         alt='backgr-contacts2'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/points-contacts.png'}
                         alt='points-contacts'/>

                </div>
                <div className='contact-us-info'>
                    <h2>Get in Touch</h2>
                    <h1 className='title'>Contact With Us</h1>
                    <div className='contact-us-info__text'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Home/Address.svg'}
                             alt='Address'/>
                        <div className='contact-us-info__description'>
                            <span className='title-top'>01</span>
                            <div className='title-top'>Address</div>
                            <div>764 Richardson Rd. Bethpage, NY 11714</div>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Home/Phone.svg'}
                             alt='Phone'/>
                        <div className='contact-us-info__description'>
                            <span className='title-top'>02</span>
                            <div className='title-top'>Phone</div>
                            <div>+1 (234) 567-89-02</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
