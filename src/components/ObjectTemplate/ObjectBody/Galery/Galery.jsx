import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Galery.scss';
import styles from './Galery.module.scss';
import defimg from '../../../../assets/img/house.jpg';



const Galery = (props) => {



    const arrImg = props.img.length > 0 ? props.img : [defimg];

    const objectsImg = arrImg.map((img) => {
        return ({
            original: img,
            thumbnail: img,
            originalClass: 'big_img',
            thumbnailClass: 'miniature',
        })

    });

    return (
        <div className={styles.galery}>
            <ImageGallery items={objectsImg} />
        </div>
    );
};

export default Galery;