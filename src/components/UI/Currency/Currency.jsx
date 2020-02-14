import React from 'react';

import styles from './Currency.module.scss';

const Currency = (props) =>{

    const currency = props.currency.map((elem,data) => {
        return(
        <option value="" key={data}>{elem}</option>
        )
    }
    );

    return(
        <select className={styles.currency}>
          {currency}
        </select>
    );
};

export default Currency;