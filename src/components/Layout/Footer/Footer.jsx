import React from 'react';
import styles from './Futer.module.scss';
import phoneFuter from '../../../assets/img/phoneFuter.svg';
import facebookF from '../../../assets/img/facebookF.svg';
import twitterF from '../../../assets/img/twitterF.svg';
import instagramF from '../../../assets/img/instagramF.svg';
import Logo from '../../../assets/img/LogoFooter.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import GlobalData from '../../../assets/globalData';


const Footer = () => {

    const router = useRouter();



    const links = [
        { href: '/', name: 'Главная' },
        { href: '/Services_For_Sellers', name: 'Услуги для продавцев' },
        { href: '/customer_services', name: 'Услуги для покупателей' },
        { href: '/about', name: 'О нас' },
        { href: '/contact', name: 'Контакты' },
    ];

    const curentPage = router.pathname;

    const link = links.map((data, i) => {
        const className = curentPage === data.href ? styles.active : '';
        return (
            <li key={i}><Link href={data.href}><a className={className}>{data.name}</a></Link></li>
        )
    })


    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.wrap}>
                    <div className={styles.contacts}>
                        <ul className={styles.telephone}>
                            <li><img src={phoneFuter} alt="" /></li>
                            <li><a href={`tel:${GlobalData.tel1}`}>{GlobalData.tel1}</a></li>
                            <li><a href={`tel:${GlobalData.tel2}`}>{GlobalData.tel2}</a></li>
                        </ul>
                        <img className={styles.logo} src={Logo} alt="logo"/>
                        <ul className={styles.social}>
                            <li><a href=""><img src={facebookF} alt="" /></a></li>
                            <li><a href=""><img src={twitterF} alt="" /></a></li>
                            <li><a href=""><img src={instagramF} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.navigation}>
                        <ul>
                            {/* <li><a className={styles.active} href="">Главная</a></li>
                            <li><a href="">Услуги для продавцев</a></li>
                            <li><a href="">Услуги для покупателей</a></li>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Контакты</a></li> */}
                            {link}
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className={styles.trait}></div> */}

            <div className='container'>
                {/* <div className={styles.links}>
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
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;