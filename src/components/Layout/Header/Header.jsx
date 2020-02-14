import React from 'react';
import Button from '../../UI/Button/Button';
import Navigation from '../../Layout/Navigation/Navigation';

import styles from './Header.module.scss';

import logo from '../../../assets/img/Logo.svg';
import icon_telephone from '../../../assets/img/telephone.svg';
import icon_faceboock from '../../../assets/img/facebook1.svg';
import icon_twitter from '../../../assets/img/twitter.svg';
import icon_instagram from '../../../assets/img/instagram1.svg';



const Header = (props) => {

   

    return (
        <header className={[styles.header]}>
            <div className="container">
                <div className={styles.wrap}>

                    <img className={styles.logo} src={logo} alt="logo" />
                    <div className={styles.contacts}>
                        <ul className={styles.phones}>
                            <li>
                                <img className={styles.icon_phone} src={icon_telephone} alt="telephone" />
                            </li>
                            <li><a href="tel:+38093 76 66 66 34">+38093 76 66 66 34</a></li>
                            <li><a href="tel:+38093 76 66 66 34">+38093 76 66 66 34</a></li>
                        </ul>
                        <ul className={styles.social}>
                            <li><a href=""><img src={icon_faceboock} alt="faceboock" /></a></li>
                            <li><a href=""><img src={icon_twitter} alt="twitter" /></a></li>
                            <li><a href=""><img src={icon_instagram} alt="instagram" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.wrap_button}>
                        <Button color="orange" text=" Мне нужно продать" />
                        <Button color="white" text=" Мне нужно купить" />
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