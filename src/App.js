import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/product' element={<Products></Products>}></Route>
           <Route path='/about' element={<About></About>}></Route>
           <Route path='/login' element={<Login></Login>}></Route>
         </Routes>
     <Footer></Footer>
    </div>
  );
};

export default App;