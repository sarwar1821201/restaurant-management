import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"  ></Cover>
           
        </div>
    );
};

export default Menu;