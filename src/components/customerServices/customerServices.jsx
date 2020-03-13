import React from 'react';

import CTA from '../CTA/CTA';

import Rectangle130 from '../../assets/img/Rectangle130.png';

import custom1 from '../../assets/img/custom1.svg';
import custom2 from '../../assets/img/custom2.svg';
import custom3 from '../../assets/img/custom3.svg';
import custom4 from '../../assets/img/custom4.svg';
import custom5 from '../../assets/img/custom5.svg';
import custom6 from '../../assets/img/custom6.svg';
import custom7 from '../../assets/img/custom7.svg';
import spar from '../../assets/img/spar.svg';

import k1 from '../../assets/img/k1.svg';
import k2 from '../../assets/img/k2.svg';
import k3 from '../../assets/img/k3.svg';
import k4 from '../../assets/img/k4.svg';

import bg from '../../assets/img/Rectangle83.png';

import styles from './customerServices.module.scss';


const customerServices = () => {
    return(
        <div className={styles.ServicesForSellers}>

        <div className={styles.blok_img}>
            <img src={Rectangle130} alt="" />
        </div>

        <div className={styles.How_we_are_working}>
            <div className='container'>
                <p className={styles.tytle}>Как мы работаем с покупателями</p>

                <div className={styles.blok_card}>

                    <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#FF9D0D' }}>01</span>
                            <img src={custom1} alt="img" />
                        </div>
                        <p className={styles.discr}>Звонок или заявка с сайта</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span>


                    <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#10A0F2' }}>03</span>
                            <img src={custom3} alt="img" />
                        </div>
                        <p className={styles.discr}>Осмотр обьекта</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span>


                    {/* <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#8868E4' }}>04</span>
                            <img src={custom4} alt="img" />
                        </div>
                        <p className={styles.discr}>Рекламная кампания</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span> */}
                    
                    <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#2BBA30' }}>02</span>
                            <img src={custom2} alt="img" />
                        </div>
                        <p className={styles.discr}>Встреча с продавцем</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span>


                    {/* <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#F19BE0' }}>05</span>
                            <img src={custom5} alt="img" />
                        </div>
                        <p className={styles.discr}>Встреча с продавцем</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span> */}


                    <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#FB8976' }}>06</span>
                            <img src={custom6} alt="img" />
                        </div>
                        <p className={styles.discr}>Сделка</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span>


                    {/* <div className={styles.card}>
                        <div className={styles.card_blok}>
                            <span style={{ color: '#78066D' }}>07</span>
                            <img src={custom7} alt="img" />
                        </div>
                        <p className={styles.discr}>Довольный покупатель</p>
                    </div>
                    <span className={styles.spar}>
                        <img src={spar} alt="" />
                    </span> */}

                </div>

            </div>
        </div>

        <div className={styles.service_block}>
            <div className='container'>
            <p className={styles.tytle}>Услуги для покупателей</p>
                <div className={styles.block_wrap}>

                    <div className={styles.block}>
                        <div className={styles.box_img}>
                            <img src={k1} alt="img" />
                            <img src={k1} alt="img" />
                        </div>
                        <div className={styles.box_text}>
                            <p className={styles.tytle_block}>
                                Lorem ipsum dolor sit amet
                        </p>
                            <p className={styles.discr_block}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet
                        </p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.box_img}>
                            <img src={k2} alt="img" />
                            <img src={k2} alt="img" />
                        </div>
                        <div className={styles.box_text}>
                            <p className={styles.tytle_block}>
                                Lorem ipsum dolor sit amet
                        </p>
                            <p className={styles.discr_block}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet
                        </p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.box_img}>
                            <img src={k3} alt="img" />
                            <img src={k3} alt="img" />
                        </div>
                        <div className={styles.box_text}>
                            <p className={styles.tytle_block}>
                                Lorem ipsum dolor sit amet
                        </p>
                            <p className={styles.discr_block}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet
                        </p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.box_img}>
                            <img src={k4} alt="img" />
                            <img src={k4} alt="img" />
                        </div>
                        <div className={styles.box_text}>
                            <p className={styles.tytle_block}>
                                Lorem ipsum dolor sit amet
                        </p>
                            <p className={styles.discr_block}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet
                        </p>
                        </div>
                    </div>

                </div>
            </div>    

        </div>
        <CTA img={bg}
                title='Заявка на поиск объекта'
                under_the_title='Укажите интересующий вас объект'
                typeInput2='text'
                placeholder='Тип объекта'
                buttonText='Отправить заявку'
            />
        </div>
    );
};

export default customerServices;

