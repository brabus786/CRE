import React from 'react';
import Layout from '../components/Layout/Layout';
import ObjectTemplate from '../components/ObjectTemplate/ObjectTemplate';
import Axios from 'axios';

const Object = (props) => {
    //console.log(props);
    return (
        <Layout>
            <ObjectTemplate  object={props.ect} similar={props.sim}/>
        </Layout>
    );
};


const similar = async(price) => {
    const getSimilar = await Axios.get('http://localhost:3001/similar?price=' + price);
    //console.log(getSimilar);
    return getSimilar.data;

};


Object.getInitialProps = async (context) => {
    const id = context.query.id;  
    const getObject = await Axios.get('http://localhost:3001/object?id=' + id);
    const sim = await similar(getObject.data.price);
    return {
        ect: getObject.data,
        sim: sim,
    };
}



export default Object;