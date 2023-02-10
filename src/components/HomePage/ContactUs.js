import React from "react";
import './ContactUs.scss';

export default function ContactUs() {
    return (
        <section className='contact-us'>
            <div className='container'>
                <div className='contact-us-images'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/bread-contacts.png'} alt='bread-contacts'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/backgr-contacts.png'} alt='backgr-contacts'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/backgr-contacts2.png'} alt='backgr-contacts2'/>
                    <img src={process.env.PUBLIC_URL + '/assets/images/Home/points-contacts.png'} alt='points-contacts'/>

                </div>
                <div className='contact-us-info'>
                </div>
            </div>
        </section>
    )
}
