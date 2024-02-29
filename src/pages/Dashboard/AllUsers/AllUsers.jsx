import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

//    const {data:users=[] , refetch} =useQuery( { ['users']: async()=> {
//        const res=await fetch('http://localhost:5000/users')
//        return res.json()
//    }
//    } )



const { isPending, refetch, isError, data : users=[] } = useQuery({
  //  queryKey: ['carts', user?.email ],
    queryFn: async ()=> {
        const response = await fetch('http://localhost:5000/users')

        return response.json()

    } ,
  })

    return (
        <div>
            all users are here : {users.length} 
        </div>
    );
};

export default AllUsers;