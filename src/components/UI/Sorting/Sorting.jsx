import React from 'react';

import styles from './Sorting.module.scss';

const Sorting = () => {
    return(
        <select className={styles.sorting} name="" id="">
            <option value="">сортировать</option>
            <option value="">по цене от меньшей</option>
            <option value="">по цене от большей</option>
            <option value="">по площади</option>
        </select>
    );
};

export default Sorting;