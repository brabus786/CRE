import React from 'react';

import FormaLid from '../UI/FormaLid/FormaLid';

import styles from './CTA.module.scss';

const CTA = (props) => {
    return (
        <div className={styles.cta}>

            <img className={styles.img_bg} src={props.img} alt="img" />

            <div className='container'>

                <div className={styles.wrap}>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.under_the_title}>{props.under_the_title}</p>

                    <FormaLid />
                </div>
                
            </div>
        </div>
    );
};

export default CTA;