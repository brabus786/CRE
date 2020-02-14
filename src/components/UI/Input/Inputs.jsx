import React from 'react';

import styles from './Inputs.module.scss';

const Input = () => {
    return(
        <div className={styles.wrap}>
            <input type="text" placeholder='От'/>
            <input type="text" placeholder='До'/>
        </div>
    );
};

export default Input;