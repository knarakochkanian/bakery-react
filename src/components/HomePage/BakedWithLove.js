import React from "react";
import './BakedWithLove.scss'


export default function BakedWithLove(){
    return(
        <section className='baked-with-love' >
            <div className='title-top'>
                Our Features
            </div>
            <div className='title'>
                Baked With Love
            </div>
            <div className='baked-with-love__cards'>
                <div className='baked-with-love__card'>
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/cup.svg'} alt='image' />
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/BredsWithLove.png'} className='baked-with-love__card-hover-img' alt='image' />
                    <div className='baked-with-love__card-title'>Fresh</div>
                    <div className='baked-with-love__card-description'>
                        Nothing the copy said could convince her and so it didn’t take long.
                    </div>
                </div>
                <div className='baked-with-love__card'>
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/tort.svg'} alt='image' />
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/BredsWithLove.png'} className='baked-with-love__card-hover-img' alt='image' />
                    <div className='baked-with-love__card-title'>Natural</div>
                    <div className='baked-with-love__card-description'>
                        Copy Writers ambushed her, made her drunk with Longe and Parole.
                    </div>
                </div>
                <div className='baked-with-love__card'>
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/breadswithlove.svg'} alt='image' />
                    <img src={ process.env.PUBLIC_URL +'/assets/images/Home/BredsWithLove.png'}className='baked-with-love__card-hover-img' alt='image' />
                    <div className='baked-with-love__card-title'>Tasty</div>
                    <div className='baked-with-love__card-description'>
                        And if she hasn’t been rewritten, then they are still using her.
                    </div>
                </div>
            </div>
        </section>

    )
}
