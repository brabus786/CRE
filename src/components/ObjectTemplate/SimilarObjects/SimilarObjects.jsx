import React from 'react';
import styles from './SimilarObjects.module.scss';
import ObjectCard from '../../ObjectCard/ObjectCard';

const SimilarObjects = (props) => {

   

   const similar = props.similar.map((data,i) => {
     return <ObjectCard key={i} data={data} />
   });

    return (
        <div className={styles.SimilarObjects}>
            <div className='container'>
                <div className={styles.wrap}>

                    <p className={styles.tytle}>
                        Похожие обьекты
                   </p>

                    <div className={styles.block_card}>
                        {similar}   
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimilarObjects;