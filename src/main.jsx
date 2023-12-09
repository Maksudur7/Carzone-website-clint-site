import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddBrand from './Brand section/AddBrand.jsx';
import Home from './Home section/Home.jsx';
import AddProduct from './Add Product Paige/AddProduct.jsx';
import ProductDettles from './Add Product Paige/ProductDettles.jsx';
import UpdateProduct from './Add Product Paige/UpdateProduct.jsx';
import CardProductDettles from './Product dettles/CardProductDettles.jsx';
import AddToCard from './My card/AddToCard.jsx';
import Login from './Login and Regstion/Login.jsx';
import Ragster from './Login and Regstion/Ragster.jsx';
import AuthProvider from './Auth Context/AuthProvider.jsx';
import PraivetRoute from './Parivate Route/PraivetRoute.jsx';
import ErrorPaige from './Error Paige/ErrorPaige.jsx';
import HomeProductsData from './Home section/HomeProductsData.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPaige></ErrorPaige>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addbrand",
        element: <PraivetRoute><AddBrand></AddBrand></PraivetRoute>
      },
      {
        path: "/addProduct",
        element: <PraivetRoute><AddProduct></AddProduct></PraivetRoute>
      },
      {
        path: "/productDettles/:id",
        element: <ProductDettles></ProductDettles>
      },
      {
        path: "/productUpdate/:id",
        element: <PraivetRoute><UpdateProduct></UpdateProduct></PraivetRoute>,
        loader: ({ params }) => fetch(`https://assinment10.vercel.app/Product/${params.id}`)
      },
      {
        path: "/dettles",
        element: <PraivetRoute><CardProductDettles></CardProductDettles></PraivetRoute>,
      
      },
      {
        path: "/myCard",
        element: <PraivetRoute><AddToCard></AddToCard></PraivetRoute>,
        loader: () => fetch('https://assinment10.vercel.app/addCar')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/regster",
        element: <Ragster></Ragster>
      },
      {
        path: "/homeSection1",
        element: <PraivetRoute><HomeProductsData></HomeProductsData></PraivetRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
