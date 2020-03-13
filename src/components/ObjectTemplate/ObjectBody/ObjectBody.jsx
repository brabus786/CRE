import React from 'react';
import styles from './ObjectBody.module.scss';
import SideBar from '../ObjectBody/SideBar/Sidebar';
import Galery from '../ObjectBody/Galery/Galery';
import Deskrption from '../ObjectBody/Deskrption/Deskrption';

const ObjectBody = (props) => {

    
    return (
        <div>
            <div className='container'>
                <div className={styles.wrap}>
                    <h1>
                       {props.object.title}
                    </h1>
                    <div className={styles.info_blok}>
                        <Galery img={props.object.photos_urls} />
                        <SideBar topCTA={props.topCTA} data={props.object} />
                    </div>
                         <Deskrption text={props.object.description} />
                </div>
            </div>
        </div>
    );
};

export default ObjectBody;