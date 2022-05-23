import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {

  const [user, loading,] = useAuthState(auth);

  const [admin] =useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h1 className='text-3xl'>DashBoard</h1>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/review'>Add Review</Link></li>
    { admin && <li><Link to='/dashboard/allusers'>Make Admin</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;