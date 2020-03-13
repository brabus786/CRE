import React from 'react';
import {useRouter} from 'next/router';

import styles from './Navigation.module.scss';
import Link from 'next/link';

import closed_icon from '../../../assets/img/closed.svg';
import facebookM from '../../../assets/img/facebookM.svg';
import twitterM from '../../../assets/img/twitterM.svg';
import instagramM from '../../../assets/img/instagramM.svg';

const Navigation = (prop) => {

    const navClasses = [styles.navigation];
    if (prop.open) navClasses.push(styles.open_menu);

    const router = useRouter();
    const pages = [
        { href: '/', name: 'Главная' },
        { href: '/Services_For_Sellers', name: 'Услуги для продавцев' },
        { href: '/customer_services', name: 'Услуги для покупателей'},
        { href: '/about', name: 'О нас'},
        { href: '/contact', name: 'Контакты'},
    ];

    const curentPage = router.pathname;

    const menu = pages.map((pageData, i) => {
        const className = curentPage === pageData.href ? styles.active : '';
        return (
            <li key={i}><Link href={pageData.href}><a className={className} >{pageData.name}</a></Link></li>
        );
    });

    return (
        <div className={navClasses.join(' ')}>
            <div className='container'>
                <div className={styles.wrap}>

                    <img className={styles.closed_icon} src={closed_icon} alt="closed" onClick={prop.onClose} />

                    <ul className={styles.desktop_menu}>
                        {menu}
                        {/* <li><Link href="/Services_For_Sellers"><a>Услуги для продавцев</a></Link></li>
                        <li><Link href="/customer_services"><a>Услуги для покупателей</a></Link></li>
                        <li><Link href="/about"><a >О нас</a></Link></li>
                        <li><Link href="/contact"><a>Контакты</a></Link></li> */}
                    </ul>

                    <ul className={styles.mobail_contacts}>
                        <li><a href="">+38093 76 66 66 34</a></li>
                        <li><a href="">+38093 76 66 66 34</a></li>
                    </ul>

                    <ul className={styles.mobail_social}>
                        <li><a href=""><img src={facebookM} alt="facebook" /></a></li>
                        <li><a href=""><img src={twitterM} alt="twitter" /></a></li>
                        <li><a href=""><img src={instagramM} alt="instagram" /></a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navigation;