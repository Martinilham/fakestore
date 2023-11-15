import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


