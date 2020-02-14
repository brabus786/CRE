import React from 'react';

import styles from './Futer.module.scss';

import phoneFuter from '../../../assets/img/phoneFuter.svg';
import facebookF from '../../../assets/img/facebookF.svg';
import twitterF from '../../../assets/img/twitterF.svg';
import instagramF from '../../../assets/img/instagramF.svg';
import Logo from '../../../assets/img/LogoFooter.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.wrap}>
                    <div className={styles.contacts}>
                        <ul className={styles.telephone}>
                            <li><img src={phoneFuter} alt="" /></li>
                            <li><a href="tel:+38093 76 66 66 34">+38093 76 66 66 34</a></li>
                            <li><a href="tel:+38093 76 66 66 34">+38093 76 66 66 34</a></li>
                        </ul>
                        <img className={styles.logo} src={Logo} alt="" />
                        <ul className={styles.social}>
                            <li><a href=""><img src={facebookF} alt="" /></a></li>
                            <li><a href=""><img src={twitterF} alt="" /></a></li>
                            <li><a href=""><img src={instagramF} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.navigation}>
                        <ul>
                            <li><a className={styles.active} href="">Главная</a></li>
                            <li><a href="">Услуги для продавцев</a></li>
                            <li><a href="">Услуги для покупателей</a></li>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>               
                </div>
            </div>

            <div className={styles.trait}></div>

            <div className='container'>
                        <div className={styles.links}>
                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                            </ul>

                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                            </ul>

                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                            </ul>

                            <ul>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                            </ul>
                        </div>
                    </div>
        </footer>
    );
};

export default Footer;