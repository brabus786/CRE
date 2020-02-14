import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Galery.scss';
import styles from './Galery.module.scss';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        originalClass:'big_img',
        thumbnailClass:'miniature',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        originalClass:'big_img',
        thumbnailClass:'miniature',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        originalClass:'big_img',
        thumbnailClass:'miniature',
    },
    {
        original: 'https://oriflamzvezda.ru/wp-content/uploads/2020/01/cropped-%D0%9A%D0%90%D0%A0%D0%A2%D0%98%D0%9D%D0%9A%D0%98-%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%9A%D0%98.-%D0%9F%D0%9E%D0%97%D0%94%D0%A0%D0%90%D0%92%D0%9B%D0%95%D0%9D%D0%98%D0%AF-%D0%B4%D0%BB%D1%8F-%D0%92%D0%B0%D1%81-....jpg',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB4giaESUXJCx6lGyy1LLuTB6ns1qrRe-GzWxNGBsqjZdagR-a',
        originalClass:'big_img',
        thumbnailClass:'miniature',
    },
    {
        original: 'https://telegraf.com.ua/files/2019/01/e713f3bf.jpg',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTlIxCgEHFDjwmFPyBvyR5wgAEJIuXNSdOSqbJ09Nok8QhC1PP',
        originalClass:'big_img',
        thumbnailClass:'miniature',
    },
    
    
];

const Galery = () => {
    return (
        <div className={styles.galery}>
            <ImageGallery items={images} />
        </div>
    );
};

export default Galery;