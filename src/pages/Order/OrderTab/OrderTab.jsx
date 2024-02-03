// import React from 'react';
// import FoodCard from '../../../components/FoodCard/FoodCard';

// const OrderTab = ({items}) => {
//     return (
//         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'  >
//     {
//         items.map (item => <FoodCard key={item._id} item={item}  >

//         </FoodCard>  )
//     }
//     </div>
//     );
// };

// export default OrderTab;

import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        
             <div   >
   
<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'  >
     {
        items.map (item => <FoodCard key={item._id} item={item}  >

        </FoodCard>  )
    }

     </div>
        </SwiperSlide>
        
      </Swiper>

    </div>
        
    );
};

export default OrderTab;