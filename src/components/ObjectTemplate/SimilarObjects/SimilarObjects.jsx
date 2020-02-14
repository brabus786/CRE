import React from 'react';
import styles from './SimilarObjects.module.scss';
import ObjectCard from '../../ObjectCard/ObjectCard';

const SimilarObjects = () => {
    return (
        <div className={styles.SimilarObjects}>
            <div className='container'>
                <div className={styles.wrap}>

                    <p className={styles.tytle}>
                        Похожие обьекты
                   </p>

                    <div className={styles.block_card}>
                        <ObjectCard />
                        <ObjectCard />
                        <ObjectCard />
                        <ObjectCard />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimilarObjects;