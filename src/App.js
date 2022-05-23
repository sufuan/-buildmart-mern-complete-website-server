import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import RequireAuth from './auth/RequireAuth';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';
import Users from './Components/DashBoard/Users/Users';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import Myreviews from './Components/MyReviews/Myreviews';
import Products from './Components/Products/Products';
import Purchasepage from './Components/PurchasePage/Purchasepage';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

const App = () => {
  return (
    <div className='p-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/purchasepage/:id' element={<Purchasepage></Purchasepage>}></Route>

        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Myreviews></Myreviews>}></Route>
          <Route path='allusers' element={<Users></Users>}></Route>
        </Route>


        <Route path='/about' element={<RequireAuth><About></About></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;