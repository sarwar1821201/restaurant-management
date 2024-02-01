import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


const Menu = () => {
    const [menu] = useMenu();
    const desserts= menu.filter(item => item.category === 'dessert' )
    const soup= menu.filter(item => item.category === 'soup' )
    const salad= menu.filter(item => item.category === 'salad' )
    const pizza= menu.filter(item => item.category === 'pizza' )
    const offered= menu.filter(item => item.category === 'offered' )


    return (
        <div>
            <Helmet>
                <title>Our | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"  ></Cover>

            <SectionTitle subHeading="Don't Miss " heading=" Today's Offere "  ></SectionTitle>
             {/* offered category  */}
            <MenuCategory items={offered} ></MenuCategory>

            {/* desset items */}

            <MenuCategory items={desserts} title='dessert' coverImg={dessertImg} ></MenuCategory>

            {/* pizza items */}
            <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg} ></MenuCategory>

            {/* salad items */}

            <MenuCategory items={salad} title='salad' coverImg={saladImg} > </MenuCategory>

            <MenuCategory items={soup} title='soup' coverImg={soupImg}  ></MenuCategory>
           
        </div>
    );
};

export default Menu;