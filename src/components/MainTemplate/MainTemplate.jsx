import React from 'react';

import img from '../../assets/img/Rectangle82.png'

import styles from './MainTemplate.module.scss';

import Cover from './Cover/Cover';
import CardsGrid from '../../components/MainTemplate/CardsGrid/CardsGrid';
import Filter from '../MainTemplate/Filter/Filter';
import CTA from '../CTA/CTA';




const MainTemplate = () => {
    return (
        <div>

            <Cover />

            <div className={styles.block_content}>
                <div className="container">

                    <h1>H1 Динамический заголовок для SEO</h1>

                    <div className={styles.wrap}>
                        <Filter />
                        <CardsGrid />
                    </div>
                </div>
            </div>

            <CTA img={img}  title={'Добавить объект'} under_the_title={'Заполните заявку и узнайте, есть ли покупатель на ваш обьект.'} />

        </div>
    );
};

export default MainTemplate;