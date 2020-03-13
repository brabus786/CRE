import React,{useRef, useEffect} from 'react';
import ObjectCard from '../../ObjectCard/ObjectCard';
import Currency from '../../UI/Currency/Currency';
import Sorting from '../../UI/Sorting/Sorting';
import Pagination from '../../UI/Pagination/Pagination';

import ReactPaginate from 'react-paginate';

import styles from './CardsGrid.module.scss';

const CardsGrid = (props) => {

   
    const linkObject = useRef();
    useEffect(() => {
        //console.dir(linkObject);
        props.CardsTop(linkObject);
    });


    const arr = props.response.map((object, i) => {
        return (<ObjectCard data={object} key={i} />)
    });

    let loading = null;
    if (props.loading) {
        loading = (
            <div className={styles.loader}>
                Loading...
            </div>
        );
    }

    return (
        <div ref={linkObject}  className={styles.wrap}>
            {loading}
            <div className={styles.select}>
    <span className={styles.shown}>Показано {props.objectsLength} из {props.totalCount}</span>
                <div className={styles.issuance_setting}>
                    <Currency currency={['USD', 'UA', 'EURO']} />

                    <Sorting onSortChange={(value) => props.sort(value)} select={props.select} />

                </div>
            </div>
            <div className={styles.cardsGrid}>
                {arr}
            </div>
            <Pagination objectTop={props.objectTop} pages={props.pageCount} page_active={props.currentPage} />
        </div>
    );
};

export default CardsGrid;