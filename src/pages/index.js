import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import axios from 'axios';
import { withRouter } from 'next/router';



const Home = (props) => {

    //console.log(props.objects)

    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => { //After the component is mounted set router event handlers
        props.router.events.on('routeChangeStart', startLoading);
        props.router.events.on('routeChangeComplete', stopLoading);

        return () => {
            props.router.events.off('routeChangeStart', startLoading);
            props.router.events.off('routeChangeComplete', stopLoading);
        }
    }, []);

    const select = (data) => {
        
        const queryObject = {};
        for (let key in data) {
            if (data[key] !== "" && data[key] !== "default") queryObject[key] = data[key];
        }

        props.router.push({
            pathname: props.router.pathname,
            query: queryObject
        });
    }

    const sort = (sortData) => {
        const queryObject = { ...props.router.query, page: 1, sort: sortData};

        props.router.push({
            pathname: props.router.pathname,
            query: queryObject
        });
    };

    const reset = () => {
        props.router.push({
            pathname: props.router.pathname,
            query: {},
        });
    }

    return (
        <Layout>
            <MainTemplate
                sort={sort}
                select={select}
                response={props.objects}
                filterInfo={props.filterInfo}
                pageCount={props.pageCount}
                currentPage={props.currentPage}
                isLoading={isLoading}
                totalCount={props.totalCount}
                objectsLength={props.objects.length}
                onReset={reset}
            />
        </Layout>
    );
};

const defaultFilterObject = {
    advertType: 'Продажа',
    sort: '-local_realty_id',
};

Home.getInitialProps = async (context) => {
    const page = context.query.page ? context.query.page : 1;
    const filterObject = { ...defaultFilterObject, ...context.query };
    const response = await axios.post(`http://localhost:3001/test?page=${page}`, filterObject);
    const filterInfo = await axios.get('http://localhost:3001/filterinfo');
    const meta = response.data.meta;

    // console.log(response.data);

    return {
        objects: response.data.result,
        filterInfo: filterInfo.data,
        totalCount: meta.totalCount,
        currentPage: meta.currentPage,
        pageCount: meta.pageCount
    };
};



export default withRouter(Home);
