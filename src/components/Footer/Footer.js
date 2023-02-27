import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
            <div className="container footer-form">
                <div className='footer-form__menu' >
                    <a href='#' className='footer-form__logo'>BKR</a>
                    <ul> Menu
                        <li><button>About</button></li>
                        <li><button>Product</button></li>
                        <li><button>Process</button></li>
                        <li><button>Contact</button></li>
                    </ul>
                    <ul className='footer-form__social'> Social
                        <br/>
                        <a href='#'><img   src={process.env.PUBLIC_URL + '/assets/images/Footer/facebook.svg'} alt='facebook'
                                 className='footer-form__img'/></a>
                        <a href='#'><img src={process.env.PUBLIC_URL + '/assets/images/Footer/twitter.svg'} alt='twitter'
                                 className='footer-form__img'/></a>
                        <a href='#'><img src={process.env.PUBLIC_URL + '/assets/images/Footer/instagram.svg'} alt='instagram'
                                 className='footer-form__img'/></a>
                    </ul>
                </div>

                <span className='line'></span>
                <div className='footer-form__bottom'>
                    <span> Copyright &copy; 2022 KKS. All Rights Reserved.</span>
                    <span> Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
