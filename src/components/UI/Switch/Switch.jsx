import React from 'react';

import styles from './Switch.module.scss';



const Switch = (props) => {
    return (
        <div className={styles.Switch}>
              <input ref={props.register} value={props.values[0]} defaultChecked="checked"  id='id1' name={props.name} type="radio" />
              <label   htmlFor='id1'  >{props.tytle[0]}</label>   
              <input ref={props.register} value={props.values[1]}  id='id2' name={props.name}  type="radio" />
              <label   htmlFor='id2'  >{props.tytle[1]}</label>          
        </div>

    );
};

export default Switch;