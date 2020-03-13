import React, { useRef, useState } from 'react';
import Router from 'next/router';
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com';
import 'react-phone-input-2/lib/style.css';


import Button from '../../UI/Button/Button';

import styles from './FormaLid.module.scss';

const FormaLid = (props) => {


    const senks = () => {
            setSen(true);
        setTimeout(() => {
            setSen(false);
        },4000);
    };

    const cleanerValue = () => {
        input1.current.value = '';
        input2.current.value = '';
        setPhone('');
    };

    const input1 = useRef();
    const input2 = useRef();

    const [phone, setPhone] = useState(undefined);
    const [sen, setSen] = useState(false);
    const [name, setName] = useState(' ');

    const getContact = () => {

        const templateParams = {
            name: input1.current.value,
            value2: input2.current.value,
            phone: phone,
            nameForm: props.nameForm,
            idObject: 'ID Объекта - ' + Router.router.query.id,
        }

        emailjs.send('gmail', 'template_jBHioBFU', templateParams, 'user_n2iF0lXWDz5Qyjph1IzZO')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setName(templateParams.name);
                senks();
                cleanerValue()
            }, function (error) {
                console.log('FAILED...', error);
            });

            
    }


    return (
        <form className={styles.form} action="">


            <p  className={sen?[styles.wrapSenks,styles.active].join(' '):styles.wrapSenks}>Спасибо {name}, в ближайшее время мы Вам позвоним</p>

            <input ref={input1} type="text" placeholder="ваше имя" />
            <input ref={input2} type={props.typeInput2} placeholder={props.placeholder} />
            <PhoneInput
                country={'ua'}
                value={phone}
                onChange={setPhone}
            />

            <Button stretch color={'orange'} text={props.buttonText} onClick={getContact} />

        </form>
    );
};

export default FormaLid;