import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'

import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
//import { getTodos, postTodo } from '../my-api'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <AuthProvider>
   <HelmetProvider>

   <QueryClientProvider client={queryClient}>
   <div className='max-w-screen-xl mx-auto' >
    <RouterProvider router={router}  ></RouterProvider>
    </div>
    </QueryClientProvider>

   
    </HelmetProvider>
   </AuthProvider>
    
  </React.StrictMode>,
)
