import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import RequireAuth from './auth/RequireAuth';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Navbar from './Shared/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/services' element={<RequireAuth>
          <Services></Services>
         </RequireAuth>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};

export default App;