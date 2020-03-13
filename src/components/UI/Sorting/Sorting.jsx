import React from 'react';
import styles from './Sorting.module.scss';
import { useRouter } from 'next/router';



const Sorting = (props) => {
    function onChnageHanlder(e) {
        props.onSortChange(e.target.value);
    }
    const router = useRouter();
    const options = [
        { value: '-local_realty_id', text: 'Самые новые' },
        { value: 'price', text: 'По цене от меньшей' },
        { value: '-price', text: 'По цене от большей' },
    ];

    return (
        <select
            onChange={onChnageHanlder}
            className={styles.sorting}
            value={router.query.sort ? router.query.sort : '-local_realty_id'}
            name="" id=""
        >
            {options.map(optionData => {
                return <option key={optionData.value} value={optionData.value}>{optionData.text}</option>
            })}
        </select>
    );
};

export default Sorting;