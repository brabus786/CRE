import React from 'react';

import styles from './ObjectCard.module.scss';

import preview from '../../assets/img/preview.png';
import eye1 from '../../assets/img/eye1.svg';

const ObjectCard = () => {
    return (
        <div className={styles.ObjectCard}>

            <div className={styles.wrap_img}>
                <img src={preview} alt="" />
            </div>

            <div className={styles.texts}>
                <p className={styles.title}>
                    Продается 3-х к.к. в районе но заголовок примерно 9 слов 9 слов 9 слов 9 слов 9 слов 9 слов 9 слов 9 слов 9 слов 9 слов
                </p>
                <p className={styles.address}>
                    ул. Виноградова/Киевский р-йн ул. Виноградова/Киевский р-йн
                </p>
            </div>

            <div className={styles.params}>

                <div className={styles.wrap_params}>
                    <span className={styles.size}>38 кв.м</span>
                    <span className={styles.number}>№ 28112019</span>
                </div>

                <div className={styles.wrap_price}>
                    <span className={styles.price}>500 000 usd</span>
                    <span className={styles.price_m}>500 usd/ кв.м</span>
                </div>

            </div>

            <div className={styles.underline}>
                <span className={styles.underline_line}></span>
            </div>

            <div className={styles.statistics}>
                <span className={styles.eye}><img src={eye1} alt="" /></span>
                <span className={styles.people}>Просмотрело 86 человек</span>
                <span className={styles.publication_date}>28.11.2019</span>
            </div>

        </div>

    );
};

export default ObjectCard;