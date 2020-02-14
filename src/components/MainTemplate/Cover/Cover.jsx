import React from 'react';
import styles from './Cover.module.scss';

import coverBg from '../../../assets/img/coverBg.png';

const Cover = () => {
    return (
        <div className={styles.cover}>
            <img className={styles.coverBg} src={coverBg} alt="coverBg" />
            <div className='container'>
                    <h2>
                        Комерческая Недвижимость Харькова
                    </h2>
                    <h3>
                        полный спектр услуг связанных с покупкой и продажей недвижимости
                    </h3>

            </div>

        </div>
    );
};

export default Cover;