import React from 'react';
import "./SpecialMoments.scss"

export default function SpecialMoments() {
    return (
        <section className='special-moments'>
            <div className='special-moments-left'>
                <img className='special-moments-left__breads' src={process.env.PUBLIC_URL +'/assets/images/Home/Bitmap.png'} alt='' />
                <img  className='special-moments-left__bread' src={process.env.PUBLIC_URL +'/assets/images/Home/Bitmap(1).png'}alt=''  />
                <img  className='special-moments-left__points-left' src={process.env.PUBLIC_URL +'/assets/images/Home/CombinedShape(1).png'} alt=''/>
                <img  className='special-moments-left__points-right' src={process.env.PUBLIC_URL +'/assets/images/Home/CombinedShape.png'} alt=''/>
                <img  className='special-moments-left__background' src={process.env.PUBLIC_URL +'/assets/images/Home/Shape.png'} alt=''/>

            </div>
            <div className='special-moments-right'>
                <div className='title-top'>
                    About Us
                </div>
                <div className='title'>Baking Special Moments</div>
                <div className='special-moments-right-box__title'>
                    Last view back
                </div>
                <div className='special-moments-right-box__description'>
                    She packed her seven versalia, put her initial into the belt and made herself on the way. When she
                    reached the first hills of the Italic.
                </div>
                <ul>
                    <li className='special-moments-right-box__description-list'>
                        On the skyline
                    </li>
                    <li className='special-moments-right-box__description-list'>
                        Pityful a rethoric
                    </li>
                    <li className='special-moments-right-box__description-list'>
                        On her way she
                    </li>
                </ul>
            </div>
        </section>

    )
}
