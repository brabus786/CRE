import React from 'react';

import styles from './Select.module.scss';

const Select = (props) => {

    let arr = props.options.map((elem, data) => {
        return (<option value="" key={data}>{elem}</option>);
    });

    return (
        <div className={styles.wrap}>
            <p className={styles.tytle_select}>{props.tytle}</p>
            <select className={styles.select}>
                {arr}
            </select>
        </div>
    );
};

export default Select;