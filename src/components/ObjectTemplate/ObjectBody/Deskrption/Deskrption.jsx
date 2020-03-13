import React from 'react';
import styles from './Deskrption.module.scss';

const Deskrption = (props) => {
    return (
        <div className={styles.deskrption}>
            <p className={styles.tytle}>
                Описание
            </p>
            <p className={styles.text}>
                {props.text}
            </p>
        </div>
    );
};

export default Deskrption;