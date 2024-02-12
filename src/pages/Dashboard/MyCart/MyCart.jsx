
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {

    const [cart] =useCart();
   // console.log(cart)
   // const total= cart.reduce( (sum,item)=> item.price+ sum, 0   )
    let total = 0;

    for (const item of cart ){
        total= total+ item.price ;
    }

    return (
        <div>
            <Helmet>
                <title> Our Rest || My Cart </title>
            </Helmet>
            <div>
                <h3 className='text-3xl' > Total Items : {cart.length} </h3>
                {/* <h3 className='text-3xl' > Total Price : ${total} </h3> */}
                <h3 className='text-3xl' > Total Price : ${total} </h3>
                <button className="btn btn-warning">Warning</button>

            </div>
        </div>
    );
};

export default MyCart;