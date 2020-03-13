import React,{useState} from 'react';
import { useRouter } from 'next/router';

import img from '../../assets/img/Rectangle82.png'

import styles from './MainTemplate.module.scss';

import Cover from './Cover/Cover';
import CardsGrid from '../../components/MainTemplate/CardsGrid/CardsGrid';
import Filter from '../MainTemplate/Filter/Filter';
import CTA from '../CTA/CTA';
import { route } from 'next/dist/next-server/server/router';




const MainTemplate = (props) => {

    const [objectTop, setObjectTop] = useState(undefined);

    const CardsTop = (obj) => {
        setObjectTop(obj.current.offsetTop);
    }
    

    const router = useRouter();
    let advertType = 'Продажа';
    if (router.query.advertType == 'продажа') advertType = 'Продажа';
    if (router.query.advertType == 'долгосрочная аренда') advertType = 'Аренда';

    let district = 'Харькова'
    if(router.query.district) district = `район ${router.query.district}`;

    let h1 = `${advertType} комерческой недвижимости ${district}`;


    return (
        <div>

            <Cover />

            <div className={styles.block_content}>
                <div className="container">

                    <h1>{h1}</h1>

                    <div className={styles.wrap}>

                        <Filter select={props.select} onReset={props.onReset} filterInfo={props.filterInfo} />

                        <CardsGrid
                            loading={props.isLoading}
                            sort={props.sort}
                            select={props.select}
                            response={props.response}
                            pageCount={props.pageCount}
                            currentPage={props.currentPage}
                            totalCount={props.totalCount}
                            objectsLength={props.objectsLength}
                            CardsTop={CardsTop}
                            objectTop={objectTop}
                        />
                    </div>
                </div>
            </div>

           
            <CTA img={img}
                title='Добавить объект'
                under_the_title='Заполните заявку и узнайте, есть ли покупатель на ваш обьект.'
                typeInput2='text'
                typeInput3='number'
                placeholder='Тип недвижимости'
                buttonText='Отправить заявку'
            />
        </div>
    );
};

export default MainTemplate;