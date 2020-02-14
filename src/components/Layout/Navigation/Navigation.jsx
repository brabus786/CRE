import React from 'react';

import styles from './Navigation.module.scss';

import closed_icon from '../../../assets/img/closed.svg';
import facebookM from '../../../assets/img/facebookM.svg';
import twitterM from '../../../assets/img/twitterM.svg';
import instagramM from '../../../assets/img/instagramM.svg';

const Navigation = (prop) => {

    const navClasses = [styles.navigation];
    if(prop.open) navClasses.push(styles.open_menu);

    return (
        <div className={navClasses.join(' ')}>
            <div className='container'>
                <div className={styles.wrap}>

                    <img className={styles.closed_icon} src={closed_icon} alt="closed" onClick={prop.onClose} />

                    <ul className={styles.desktop_menu}>
                        <li><a className={styles.active} href="">Главная</a></li>
                        <li><a href="">Услуги для продавцев</a></li>
                        <li><a href="">Услуги для покупателей</a></li>
                        <li><a href="">О нас</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>

                    <ul className={styles.mobail_contacts}>
                        <li><a href="">+38093 76 66 66 34</a></li>
                        <li><a href="">+38093 76 66 66 34</a></li>
                    </ul>

                    <ul className={styles.mobail_social}>
                        <li><a href=""><img src={facebookM} alt="facebook"/></a></li>
                        <li><a href=""><img src={twitterM} alt="twitter"/></a></li>
                        <li><a href=""><img src={instagramM} alt="instagram"/></a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navigation;