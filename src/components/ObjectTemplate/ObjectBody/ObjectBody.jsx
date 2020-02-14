import React from 'react';
import styles from './ObjectBody.module.scss';
import SideBar from '../ObjectBody/SideBar/Sidebar';
import Galery from '../ObjectBody/Galery/Galery';
import Deskrption from '../ObjectBody/Deskrption/Deskrption';

const ObjectBody = () => {
    return (
        <div>
            <div className='container'>
                <div className={styles.wrap}>
                    <h1>
                        H1 Динамический заголовок для SEO
                    </h1>

                    <div className={styles.info_blok}>

                        <Galery />
                        <SideBar />

                    </div>

                    <Deskrption />

                </div>
            </div>
        </div>
    );
};

export default ObjectBody;