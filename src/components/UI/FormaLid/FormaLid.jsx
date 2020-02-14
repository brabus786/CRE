import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './FormaLid.module.scss';

const FormaLid = () => {
    return(
        <form className={styles.form} action="">
            <input type="text" placeholder="ваше имя"/>
            <input type="text" placeholder="ваш объект" />
            <input type="tel" placeholder='ваш номер телефона'/>
            <Button stretch color={'orange'} text={'Отправить заявку'} />
        </form>
    );
};

export default FormaLid;