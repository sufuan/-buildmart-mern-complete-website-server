import React from 'react';


import Home from './Components/Home/Home';
import Footer from './Shared/Footer';

import Navbar from './Shared/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
};

export default App;