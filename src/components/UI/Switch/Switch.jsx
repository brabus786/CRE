import React from 'react';

import styles from './Switch.module.scss';

const Switch = () => {
    return(
        <div className={styles.Switch}>
            <button>Продажа</button>
            <button>Аренда</button>
        </div>
    );
};

export default Switch;