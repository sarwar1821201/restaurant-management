import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
 
   const [reviews, setReviews ] = useState([]);

   useEffect( ()=>{
       fetch('reviews.json')
       .then(res=> res.json() )
       .then(data => {
          setReviews(data)
       } )
   } , [] )

    return (
        <div className='my-20' >
            <SectionTitle  
                heading='Testimonial'
                subHeading='What Our Client Say'
              >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
            reviews.map (review =>  <SwiperSlide key={review._id} >
                <div className='m-10' >
                    <p>{review.details}</p>
                    <h2 className='text-2xl text-orange-400 text-center ' >{review.name}</h2>
                </div>
                </SwiperSlide>
            )
         }
      </Swiper>

        </div>
    );
};

export default Testimonial;