import React from 'react'
import  './NavStyle.scss'

export default function Nav(){
                return(
            <header className='header'>
                <nav className='navbar'>
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
                    <div>
                            <div className="navbar-mobile">
                                <div className="container-mobile nav-container-mobile">
                                    <input className="checkbox" type="checkbox" name="" id=""/>
                                    <div className="hamburger-lines">
                                        <span className="line line1"></span>
                                        <span className="line line2"></span>
                                        <span className="line line3"></span>
                                    </div>
                                    <div className="logo-mobile">
                                        <a href='/Users/Knara/WebstormProjects/bakery-react/public' className='navbar-items__logo'>BKR</a>
                                    </div>
                                    <div className="menu-items-mobile">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#">Recipes</a></li>
                                        <button className='button-black'>Contact</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </nav>
            </header>
        )
}
