import React from 'react';
import styles from './aboutUs.module.scss';
import topImg from '../../assets/img/Rectangle110.png';
import Img1 from '../../assets/img/Rectangle111.png';
import Img2 from '../../assets/img/Rectangle112.png';
import Img3 from '../../assets/img/Rectangle113.png';
import Img4 from '../../assets/img/Rectangle114.png';

const aboutUs = () => {
    return (
        <div className={styles.aboutAu}>
            <div className={styles.wrap_img}>
                <img src={topImg} alt="Top img" />
            </div>
            <div className='container'>
                <div className={styles.wrap}>
                <p className={styles.tytle}>О нас</p>
                <p className={styles.discription}>
                    Агентство недвижимости ФЛП «Консалт Элис Групп » было основано в 2015 году, в период сложных изменений в нашем регионе. Приходит время и несмотря на все трудности вопрос, связанный с приобретением или продажей жилья затрагивает каждого из нас. Это связано с необходимостью срочно продать дом или квартиру, обменять уже имеющуюся недвижимость.
   
                    И в такой ситуации очень сложно будет справиться самостоятельно, потому что важен грамотный и профессиональный подход к этому делу.
                </p>
                <div className={styles.blok_comand}>
                    <p className={styles.tytle}>Наша команда</p>

                    <div className={styles.our_team}>

                        <div className={styles.card}>
                            <div className={styles.wrap_img_card}>
                                <img src={Img1} alt=""/>
                            </div>
                            <p className={styles.name}>
                                Nick
                            </p>
                            <p className={styles.position}>
                                Web-developer
                            </p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.wrap_img_card}>
                                <img src={Img4} alt=""/>
                            </div>
                            <p className={styles.name}>
                                Nick
                            </p>
                            <p className={styles.position}>
                                Web-developer
                            </p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.wrap_img_card}>
                                <img src={Img2} alt=""/>
                            </div>
                            <p className={styles.name}>
                                Nick
                            </p>
                            <p className={styles.position}>
                                Web-developer
                            </p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.wrap_img_card}>
                                <img src={Img3} alt=""/>
                            </div>
                            <p className={styles.name}>
                                Nick
                            </p>
                            <p className={styles.position}>
                                Web-developer
                            </p>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default aboutUs;