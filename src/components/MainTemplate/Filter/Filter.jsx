import React, { useEffect, useRef, useState } from 'react';
import Switch from '../../UI/Switch/Switch';
import Select from '../../UI/Select/Select';
import Inputs from '../../UI/Input/Inputs';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Button from '../../UI/Button/Button';

import styles from './Filter.module.scss';
import { useForm } from 'react-hook-form';
import {useRouter} from 'next/router';


const Filter = (props, e) => {

    const [stateMenu, setStateMeu] = useState(false);

    const domFilter = useRef();

    const form = useForm();
    const register = form.register;
    const handleSubmit = form.handleSubmit;
    const errors = form.errors;
    const setValue = form.setValue;
    const reset = form.reset;

    const setFilterHandler = (select, register) => {
        props.select(select);
    };

    function scrollListener() {
        if (pageYOffset <= domFilter.current.offsetTop) {
            setStateMeu(false);
        } else {
            setStateMeu(true);
        }
    }

    const router = useRouter();
    const initFilter = (filterObject) => {
        for (const key in filterObject) {
            setValue(key, filterObject[key]);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        const filterObject = router.query;
        initFilter(filterObject);
        
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [])

    const filterClasses = [styles.filter];
    if (stateMenu) filterClasses.push(styles.fixed);

    const handleReset = () => {
        props.onReset();
        reset({
            'advertType': 'Продажа',
            'district': 'default',
            'property_pype': 'default',
            'priceSqureFrom': '',
            'priceSqureTo': '',
            'priceObjectFrom': '',
            'priceObjectTo': '',
            'squreFrom': '',
            'squareTo': '',
        });
    }

    return (

        <div ref={domFilter} className={styles.wrapFilter}>
            <div  className={filterClasses.join(' ')}>

                <div className={styles.filter_bar}>
                    <span>Фильтр</span>
                    <span onClick={handleReset}>Скинуть</span>
                </div>

                <Switch
                    tytle={['Продажа', 'Аренда']}
                    values={['Продажа', 'Аренда']}
                    name={'advertType'}
                    register={register}
                />
                {/* 
            <Select
                options={props.filterInfo.city}
                tytle={'Город'}
                name={'town'}
                register={register}
            /> */}
                <Select
                    defaultOption="Все типы"
                    options={props.filterInfo.realty_type}
                    tytle={'Тип недвижимости '}
                    name={'property_pype'}
                    register={register}
                />
                <Select
                    defaultOption="Все районы"
                    options={props.filterInfo.district}
                    tytle={'Район'}
                    name={'district'}
                    register={register}
                />



                <Inputs
                    type="number"
                    text={'Цена за м2'}
                    register={register}
                    names={['priceSqureFrom', 'priceSqureTo']}
                    step="50"
                />

                <Inputs
                    type="number"
                    text={'Цена за объект'}
                    register={register}
                    names={['priceObjectFrom', 'priceObjectTo']}
                    step='5000'
                />

                <Inputs
                    type="number"
                    text={'Общая площадь'}
                    register={register}
                    names={['squreFrom', 'squareTo']}
                />

                {/* <Checkbox checked /> */}
                <Button stretch text="Применить" color="orange" onClick={handleSubmit(setFilterHandler)} />

            </div>
        </div>
    );
};

export default Filter;