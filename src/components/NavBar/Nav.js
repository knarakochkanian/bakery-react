import React from 'react'
import  './NavStyle.scss'

export default function Nav(){
    return(
        <nav className='navbar '>
            <div className='navbar-items'>
                <div className='navbar-items__main'>
                    <a href='/Users/Knara/WebstormProjects/bakery-react/public' className='navbar-items__logo'>BKR</a>
                    <div className='navbar-items__wrapper'>
                        <a href='/Users/Knara/WebstormProjects/bakery-react/public' className='navbar-items__wrapper-links'>About</a>
                        <a href='/Users/Knara/WebstormProjects/bakery-react/public' className='navbar-items__wrapper-links'>Products</a>
                        <a href='/Users/Knara/WebstormProjects/bakery-react/public' className='navbar-items__wrapper-links'>Recipes</a>
                    </div>
                </div>
                <button className='button-black'>Contact</button>
            </div>

        </nav>
    )
}
