import React from 'react';
import Button from '../../../UI/Button/Button';
import styles from './SideBar.module.scss';

import telegram from '../../../../assets/img/messengers/telegram.svg';
import viber from '../../../../assets/img/messengers/viber.svg';
import facebook from '../../../../assets/img/messengers/facebook.svg';
import twitter from '../../../../assets/img/messengers/twitter.svg';
import instagram from '../../../../assets/img/messengers/instagram.svg';


const SideBar = () => {
    return (
        <div className={styles.SideBar}>
            <ul className={styles.info}>
                <li><span className={styles.row_name_bold}>Цена</span><span className={styles.cena}>500 000</span><span className={styles.currency}>usd</span></li>
                <li><span className={styles.row_name_bold}>Цена за м/кв</span><span className={styles.cena}>500</span><span className={styles.currency}>usd</span></li>
                <li><span className={styles.row_name}>Площадь</span><span className={styles.params}>159 кв. м.</span></li>
                <li><span className={styles.row_name}>Район</span><span className={styles.params}>Киевский</span></li>
                <li><span className={styles.row_name}>Адрес</span><span className={styles.params}>ул. Виноградная</span></li>
                <li><span className={styles.row_name}>Станция метро</span><span className={styles.params}>Научная</span></li>
                <li><span className={styles.row_name}>Телефон</span><div className={styles.tel}><a href="tel:+38 094 76 676 76">+38 094 76 676 76</a><a href="tel:+38 094 76 676 76">+38 094 76 676 76</a></div></li>
            </ul>

            <ul className={styles.messengers}>
                <li><a href=""><img src={telegram} alt="telegram" /></a></li>
                <li><a href=""><img src={viber} alt="viber" /></a></li>
                <li><a href=""><img src={facebook} alt="facebook" /></a></li>
                <li><a href=""><img src={twitter} alt="twitter" /></a></li>
                <li><a href=""><img src={instagram} alt="instagram" /></a></li>
            </ul>

            <div className={styles.wrap_button}>
                <Button stretch color={'orange'} text={'Предложи свою ценy'} />
            </div>
        </div>
    );
};

export default SideBar;