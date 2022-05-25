import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import RequireAuth from './auth/RequireAuth';
import DashBoard from './Components/DashBoard/DashBoard';
import Users from './Components/DashBoard/Users/Users';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import Myreviews from './Components/MyReviews/Myreviews';
import Products from './Components/Products/Products';
import Purchasepage from './Components/PurchasePage/Purchasepage';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Components/DashBoard/MyProfile';
import ManageAllOrders from './Components/DashBoard/ManageAllOrders';
import ManageProduct from './Components/DashBoard/ManageProduct';
import AddProduct from './Components/DashBoard/AddProduct';
import Payment from './Components/DashBoard/Payment/Payment';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';

const App = () => {
  return (
    <div className='p-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/purchasepage/:id' element={<RequireAuth><Purchasepage></Purchasepage></RequireAuth>}></Route>


        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Myreviews></Myreviews>}></Route>
          <Route path='allusers' element={<Users></Users>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>


        </Route>


       
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;