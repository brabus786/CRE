import React from 'react';
import BreadCrumbs from '../ObjectTemplate/BreadCrumbs/BreadCrumbs';
import ObjectBody from '../ObjectTemplate/ObjectBody/ObjectBody';
import SimilarObjects from '../ObjectTemplate/SimilarObjects/SimilarObjects';
import styles from './ObjectTemplate.module.scss';
import CTA from '../CTA/CTA';
import img from '../../assets/img/Rectangle8.png';

const ObjectTemplate = () => {
    return(
        <div>
            <BreadCrumbs />
            <ObjectBody />
            <SimilarObjects />
            <CTA img={img} title={'Добавить объект'} />
        </div>
    )
};

export default ObjectTemplate;