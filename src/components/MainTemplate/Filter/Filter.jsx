import React from 'react';

import Switch from '../../UI/Switch/Switch';
import Select from '../../UI/Select/Select';
import Inputs from '../../UI/Input/Inputs';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Button from '../../UI/Button/Button';

import styles from './Filter.module.scss';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className={styles.filter_bar}>
                <span>Фильтр</span>
                <span>Скинуть</span>
            </div>

            <Switch />

            <Select options={['салтовка','центр','трактора','шевченко']} tytle={'Район'} />

            <Inputs />

            <Checkbox checked />
            <Checkbox />
            <Checkbox />
            <Checkbox checked />
            <Checkbox checked />
            <Button stretch text="Применить" color="orange" />  
            

        </div>
    );
};

export default Filter;