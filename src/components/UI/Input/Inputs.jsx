import React from 'react';

import styles from './Inputs.module.scss';

const Input = (props) => {
    return (
        <div>
            <p className={styles.tytle}>{props.text}</p>
            <div className={styles.wrap}>
                <input step={props.step} type={props.type} name={props.names[0]} ref={props.register} placeholder='От' />
                <input step={props.step} type={props.type} name={props.names[1]} ref={props.register} placeholder='До' />
            </div>
        </div>
    );
};

export default Input;