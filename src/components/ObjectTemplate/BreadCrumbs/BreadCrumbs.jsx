import React from 'react';
import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
    return (
        <div className={styles.block_crumbs}>
            <div className="container">
                <div className={styles.wrap}>
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span>/</span>
                    <a className={styles.active} href="">Карточка</a>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumbs;