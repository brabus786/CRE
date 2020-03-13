import React from 'react';

import styles from './ObjectCard.module.scss';

import Link from 'next/link';

import eye1 from '../../assets/img/eye1.svg';

import noImg from '../../assets/img/house.jpg';


const ObjectCard = (props) => {

   
    //console.log(props.data.title);

    const preview = props.data.photos_urls[0] !== undefined?props.data.photos_urls[0]:noImg;
    // console.log(preview);
    
    const cenaZaMetr = (x, y) => {
        const z = Math.floor(y / x);
        return z;
    }

    return (
        <Link href={'/object?id=' + props.data.local_realty_id}>
            <a>
                <div className={styles.ObjectCard}>

                    <div className={styles.wrap_img}>
                        <img src={preview} alt="preview" />
                    </div>

                    <div className={styles.texts}>
                        <p className={styles.title}>
                            {props.data.title}
                        </p>
                        <p className={styles.address}>
                            {props.data.street}
                        </p>
                    </div>

                    <div className={styles.params}>

                        <div className={styles.wrap_params}>
                            <div className={styles.size}><span>{props.data.total_area}</span><span>&ensp;м<sup>2</sup></span></div>
                            <div className={styles.number}>№ {props.data.local_realty_id}</div>
                        </div>

                        <div className={styles.wrap_price}>
                            <span className={styles.price}>{props.data.price} usd</span>
                            <span className={styles.price_m}>{cenaZaMetr(props.data.total_area, props.data.price)} usd / м<sup>2</sup></span>
                        </div>

                    </div>

                    <div className={styles.underline}>
                        <span className={styles.underline_line}></span>
                    </div>

                    <div className={styles.statistics}>
                        <span className={styles.eye}><img src={eye1} alt="" /></span>
                        <span className={styles.people}>Просмотрело {props.data.views} чел.</span>
                        <span className={styles.people_nn}>86</span>
                        <span className={styles.publication_date}>28.11.2019</span>
                    </div>

                </div>
            </a>
        </Link>
    );
};

export default ObjectCard;