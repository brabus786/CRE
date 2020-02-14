import React from 'react';

import styles from './Checkbox.module.scss';

const Checkbox = (props) => {
    return (
        <label className={styles.label} htmlFor="check">     
            <input className={props.checked?styles.checked:styles.no_checked} type="checkbox"  id="check" />
            Lorem ipsum dolor sit amet
        </label>
    );
};

export default Checkbox;