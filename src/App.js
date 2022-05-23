import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';
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

           <Route path='/dashboard' element={<DashBoard></DashBoard>}>

             <Route index element={<MyOrders></MyOrders>}></Route>
             <Route path='review' element={<Myreviews></Myreviews>}></Route>
           </Route>

           {/* <Route path='/myorders' element={<MyOrders></MyOrders>}></Route> */}
           <Route path='/myreviews' element={<Myreviews></Myreviews>}></Route>
           <Route path='/about' element={<About></About>}></Route>
           <Route path='/login' element={<Login></Login>}></Route>
           <Route path='/register' element={<Register></Register>}></Route>
         </Routes>
     <Footer></Footer>
    </div>
  );
};

export default App;