import React,{useRef,useEffect} from 'react';

import FormaLid from '../UI/FormaLid/FormaLid';

import styles from './CTA.module.scss';

const CTA = (props) => {



    const refCTA = useRef();
    useEffect(() => {
        props.params != undefined?props.params(refCTA):null;
    });

   // console.log(props.params);

    return (
        <div className={styles.cta} ref={refCTA}>

            <img className={styles.img_bg} src={props.img} alt="img" />

            <div className='container'>

                <div className={styles.wrap}>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.under_the_title}>{props.under_the_title}</p>

                    <FormaLid
                        typeInput2={props.typeInput2}
                        typeInput3={props.typeInput3}
                        placeholder={props.placeholder}
                        buttonText={props.buttonText}
                        nameForm={props.title}
                    />
                </div>

            </div>
        </div>
    );
};

export default CTA;