import React from 'react';
import styles from './popup.module.scss';
import popupImg from '../../../assets/img/popupImg.png';
import telegram from '../../../assets/img/messengers/telegram.svg';
import viber from '../../../assets/img/messengers/viber.svg';
import facebook from '../../../assets/img/messengers/facebook.svg';
import globalData from '../../../assets/globalData';

const popup = (props) => {

    let popupElem = null;
    if (props.isopen) {
        popupElem = (
            <div className={styles.popup}>
                <div className={styles.contacts}>
                    <div onClick={props.onClose} className={styles.closed}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.wrapImg}><img src={popupImg} alt="" /></div>
                    <div className={styles.wrapContacts}>
                        <ul className={styles.phone}>
                            <li><a href={`tel:${globalData.tel1}`}>+380 50 500 30 45</a></li>
                            <li><a href={`tel:${globalData.tel2}`}>+380 50 500 30 45</a></li>
                            <li><a href={`mailto:${globalData.mail}`}>E-mail</a></li>
                        </ul>
                        <ul className={styles.mesengers}>
                            <li><a href=""><img src={telegram} alt="" /></a></li>
                            <li><a href=""><img src={viber} alt="" /></a></li>
                            <li><a href=""><img src={facebook} alt="" /></a></li>
                        </ul>
                    </div>


                </div>
            </div>
        );
    };

    return (
        popupElem
    );
};

export default popup;

