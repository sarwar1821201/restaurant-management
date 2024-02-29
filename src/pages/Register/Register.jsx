import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';


const Register = () => {
  
   const {signUp, userUpdateProfile   } = useContext(AuthContext)
  const [error,setError] = useState('');
  const [success, setSuccess] = useState ('');
  const [show, setShow] = useState(false);
  const navigate= useNavigate();
  const location= useLocation();

   const from= location.state?.from?.pathname || '/' ;

     const handleSignUp = (event) => {
      event.preventDefault();
      const name= event.target.name.value;
      const email= event.target.email.value;
      const password= event.target.password.value;
       const photo = event.target.photo.value
        console.log(name,email,password, photo)

       
        setError('')
        setSuccess('')
        
        if (password.length < 6) {
         alert('PassWord Must Be 6 Character or longer');
         return;
       }

       signUp (email,password)
       .then( (result) =>{

        const loggedUser= result.user;
        console.log(loggedUser);
       // userProfileUpdate(name,photo);
      //  alert('congratulations!! Registration Successfully Completed')

        userUpdateProfile(name,photo)
         .then( ()=> {
          const saveUser= {name: name, email:email }

            fetch('http://localhost:5000/users', {
               method: 'POST',
               headers: {
                'content-type': 'application/json'
               },
               body: JSON.stringify(saveUser)
            }  )
            .then( (res)=>res.json() )
            .then(  (data)=>{
                if(data.insertedId){

                  console.log('user profle info updated')
                  Swal.fire({
                   title: 'Success!',
                   text: 'Registration Successfully Completed',
                   icon: 'success',
                   confirmButtonText: 'Cool'
                 })
                 navigate(from, {replace: true})
                  
                }
            } )
        
         } )

        .catch ( error => {
            console.log(error)
         } )
               // alert('congratulations!! Registration Successfully Completed')


        setError('')
        event.target.reset()

       } )

       .catch( error =>{
           console.log(error)
           setError(error.message)
           event.target.reset();
           setSuccess(' ')
       } )
 

     }

       
  

    // const {
    //     register,
    //     handleSubmit,
    //    // formState: { errors },
    //   } = useForm;

    //   const onSubmit = (data) => {
    //      console.log(data)
    //   }
   
     // console.log(watch("example"))

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSignUp}  className="card-body">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="enter your name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL </span>
          </label>
          <input type="text"  name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ?  'text' : 'password' } name='password'  placeholder="password" className="input input-bordered" required />
          <label className="label">
          <p className='mt-2' onClick={()=> setShow(!show) } > 
         
         {
                 show ?  <button className='btn btn-primary' >Hide Password</button> : <button className='btn btn-primary' >Show Password</button>
             }
       </p>
          </label>
        </div>

        <div className="form-control mt-6">
        <input  className="btn btn-primary" type="submit" value="SignUp" />

        </div>
      </form>

      <p className='ps-6'> <small> Have An Account ? <Link to='/login'> <button className='btn btn-primary' >Please Login </button> </Link>  </small>  </p>
       <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;