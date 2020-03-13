import React from 'react';

import styles from './Select.module.scss';

const Select = (props) => {

    let arr = props.options.map((elem, data) => {
        return (<option value={elem} key={data}>{elem}</option>);
    });

    return (
        <div className={styles.wrap}>
            <p className={styles.tytle_select}>{props.tytle}</p>
            <select ref={props.register} name={props.name} className={styles.select} defaultValue={'default'}>
                <option value='default'>{props.defaultOption}</option>
                {arr}
            </select>
        </div>
    );
};

export default Select;