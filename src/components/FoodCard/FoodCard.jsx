import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { json, useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {image, recipe, price, name,_id } = item;
      
      const {user} =useContext(AuthContext)
       const navigate= useNavigate()
       const location= useLocation()
  //   console.log(item)
    const handleAddToCart = (item) => {
          console.log(item)
          if(user && user.email ){ 
             const cartItem= {menuItemId: _id,image,name,price, email: user.email  }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body:JSON.stringify(cartItem)
            }  )
            .then(res=> res.json())
            .then( (data) => {
                if(data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
            } )
           
          }

          else {
               
            Swal.fire({
              title: "Please Login To Order The Food",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login Now"
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login')
              }
            });

          }
  }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4' > Price: ${price}</p>
  <div className="card-body flex flex-col items-center  ">
    <h2 className="card-title"> {name} </h2>
    <p> {recipe} </p>

    <div className="card-actions justify-end">
      <button onClick={()=> handleAddToCart(item) } className="btn btn-primary"> Add To Cart </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;