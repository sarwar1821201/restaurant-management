import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaShareAlt, FaTrash, FaUserAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  //    const {data:users=[] , refetch} =useQuery( { ['users']: async()=> {
  //        const res=await fetch('http://localhost:5000/users')
  //        return res.json()
  //    }
  //    } )

  const {
    isPending,
    refetch,
    isError,
    data: users = [],
  } = useQuery({
    //  queryKey: ['carts', user?.email ],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/users");

      return response.json();
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user._id, 'make admin this  id');

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data)
         if(data.modifiedCount) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin now `,
            showConfirmButton: false,
            timer: 1500
          });
         }
      });
  };

  const handleDelete = (user) => {
    console.log("user delete kore den ", user);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>all User</title>
      </Helmet>
      <h2 className="text-3xl font-semibold my-4">
        {" "}
        Total Users : {users.length}{" "}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  
                  {user.role === "admin" ?   "admin" : 
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600 text-white "
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  }
                </td>

                <td>
                  
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost bg-red-600 text-white "
                  >
                    <FaTrash></FaTrash>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
