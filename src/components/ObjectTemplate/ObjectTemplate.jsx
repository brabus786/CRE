import React,{useState} from 'react';
import BreadCrumbs from '../ObjectTemplate/BreadCrumbs/BreadCrumbs';
import ObjectBody from '../ObjectTemplate/ObjectBody/ObjectBody';
import SimilarObjects from '../ObjectTemplate/SimilarObjects/SimilarObjects';
import styles from './ObjectTemplate.module.scss';
import CTA from '../CTA/CTA';
import img from '../../assets/img/Rectangle8.png';




const ObjectTemplate = (props) => {

    const [top,setTop] = useState(undefined);
    
    const ctaParams = (paramsTop) => {
        setTop(paramsTop.current.offsetTop);
    }

    return (
        <div>
            <BreadCrumbs />
            <ObjectBody topCTA={top}  object={props.object} />
            <SimilarObjects similar={props.similar} />
            <CTA params={ctaParams} img={img}
                title={'Предложите свою цену'}
                typeInput2='number'
                placeholder='предложите свою цену'
                buttonText='Отправить предложение'
            />
        </div>
    )
};

export default ObjectTemplate;