import React from 'react';
import Banner from './Banner/Banner';
import Categoty from '../Category/Categoty';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           
           <Helmet>
                <title> Home Page</title>
            </Helmet>
 
            <Banner></Banner>
            <Categoty></Categoty>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;