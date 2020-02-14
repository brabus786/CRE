import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = (props) => {

    const classname = (i) => {
        if (props.page_active == i + 1) {
            return ([styles.pagination_element, styles.active])
        } else {
            return ([styles.pagination_element])
        }
    };

    const arr = [];
    for (let i = 0; i < props.pages; i++) {
        arr.push(<div key={i} className={classname(i).join(' ')} >{i + 1}</div>)
    };

    return (
        <div className={styles.wrap}>
            {arr}
        </div>
    );
};

export default Pagination;