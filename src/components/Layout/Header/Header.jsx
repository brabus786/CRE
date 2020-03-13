import React from 'react';
import Button from '../../UI/Button/Button';
import Navigation from '../../Layout/Navigation/Navigation';

import styles from './Header.module.scss';

import logo from '../../../assets/img/Logo.svg';
import icon_telephone from '../../../assets/img/telephone.svg';
import icon_faceboock from '../../../assets/img/facebook1.svg';
import icon_twitter from '../../../assets/img/twitter.svg';
import icon_instagram from '../../../assets/img/instagram1.svg';

import { useRouter } from 'next/router';
import Linck from 'next/link';
import GlobalData from '../../../assets/globalData';


const Header = (props) => {


    const router = useRouter();

    const colorButton = (router, url) => {
        if ((router.pathname == '/' && url == '/Services_For_Sellers' || router.pathname == '/Services_For_Sellers' && url == '/Services_For_Sellers') || (router.pathname == '/customer_services' && url == '/customer_services')) {
            return 'orange';
        } else {
            return 'white';
        };


    };



    return (
        <header className={[styles.header]}>
            <div className="container">
                <div className={styles.wrap}>

                    <Linck href='/'><a><img className={styles.logo} src={logo} alt="logo" /></a></Linck>
                    <div className={styles.contacts}>
                        <ul className={styles.phones}>
                            <li>
                                <img className={styles.icon_phone} src={icon_telephone} alt="telephone" />
                            </li>
                            <li><a href={`tel:${GlobalData.tel1}`}>{GlobalData.tel1}</a></li>
                            <li><a href={`tel:${GlobalData.tel2}`}>{GlobalData.tel2}</a></li>
                        </ul>
                        <ul className={styles.social}>
                            <li><a href=""><img src={icon_faceboock} alt="faceboock" /></a></li>
                            <li><a href=""><img src={icon_twitter} alt="twitter" /></a></li>
                            <li><a href=""><img src={icon_instagram} alt="instagram" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.wrap_button}>

                        <Button onClick={() => router.push('/Services_For_Sellers')} color={colorButton(router, '/Services_For_Sellers')} text=" Мне нужно продать" />
                        <Button onClick={() => router.push('/customer_services')} color={colorButton(router, '/customer_services')} text=" Мне нужно купить" />



                    </div>
                    <div className={styles.burger} onClick={props.onBurgerClick}>
                        <div className={styles.elements}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>



            </div>
            <Navigation open={props.menu} onClose={props.onBurgerClick} />
        </header>

    );
};

export default Header;