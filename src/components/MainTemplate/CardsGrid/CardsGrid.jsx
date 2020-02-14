import React from 'react';
import ObjectCard from '../../ObjectCard/ObjectCard';
import Currency from '../../UI/Currency/Currency';
import Sorting from '../../UI/Sorting/Sorting';
import Pagination from '../../UI/Pagination/Pagination';

import styles from './CardsGrid.module.scss';

const CardsGrid = () => {
    return (
        <div className={styles.wrap}>

            <div className={styles.select}>
                <span className={styles.shown}>Показано 20 из 400</span>
                <div className={styles.issuance_setting}>
                    <Currency  currency={['USD','UA','EURO']} />
                    <Sorting />
                </div>
            </div>

            <div className={styles.cardsGrid}>
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
                <ObjectCard />
            </div>

            <Pagination  pages={10} page_active={5} />

        </div>
    );
};

export default CardsGrid;