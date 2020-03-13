import React from 'react';
import Router from 'next/router';

import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';


const Pagination = (props) => {

    
    const handleNavigtaion = (selectedPage) => {
        if(selectedPage.selected + 1 != Router.query.page) {
            const pathname = Router.pathname;
            const query = { ...Router.query };
            query.page = selectedPage.selected + 1;
            
            window.scrollTo({
                top:props.objectTop - 100,
                behavior:'smooth',
            })

            Router.push({
                pathname,
                query
            });
        }
    };

    // const arr = [];
    // for (let i = 0; i < props.pages; i++) {
    //     arr.push(
    //         <div onClick={() => handleNavigtaion(i + 1)} key={i} className={classname(i).join(' ')} >
    //             {i + 1}
    //         </div>
    //     )
    // };

    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            activeClassName={styles.active}
            containerClassName={styles.wrap}
            subContainerClassName={styles.pagination_element}

            initialPage={+props.page_active - 1}
            pageCount={props.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handleNavigtaion}
        />
        // <div className={styles.wrap}>
        //     {arr}
        // </div>
    );
};

export default Pagination;