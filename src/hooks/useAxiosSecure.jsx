

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

 // Assuming you have an AuthContext for managing authentication

const useAxiosSecure = () => {
  const [axiosSecure, setAxiosSecure] = useState(null);
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    const instance = axios.create({
      baseURL: 'http://localhost:5000',
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    instance.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut().then(() => {
            navigate('/login');
          });
        }
        return Promise.reject(error);
      }
    );

    setAxiosSecure(instance);

    return () => {
      // Cleanup
      setAxiosSecure(null);
     // setAxiosSecure([])
    };
  }, [logOut, navigate,axiosSecure]);

  // Return axiosSecure outside of the useEffect
  return [axiosSecure];
};

export default useAxiosSecure;
