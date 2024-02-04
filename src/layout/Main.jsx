import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';

const Main = () => {

   const location= useLocation();
  // console.log(location);

   const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('/register')

    return (
        <div>
          { noHeaderFooter ||  <Header></Header>   }
          <Outlet></Outlet>
         {  noHeaderFooter || <Footer></Footer>  }

        </div>
    );
};

export default Main;