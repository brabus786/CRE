import React from 'react';
import styles from './ContactComponent.module.scss';
//import STA from '../CTA/CTA';

const ContactComponent = () => {
    return (
        <div>
            <div className="container">
                <div className={styles.wrap}>
                    <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.0304393384113!2d36.222843515715496!3d50.01078467941715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1218489bd47%3A0xdacc0b4cdc59ab20!2z0YPQuy4g0JTQsNC90LjQu9C10LLRgdC60L7Qs9C-LCAyNCwg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA2MTAwMA!5e0!3m2!1sru!2spl!4v1583333570148!5m2!1sru!2spl"></iframe>
                    <p>г. Харьков ул. Данилевского 24</p>
                    <p>pilipcatinaa@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default ContactComponent;