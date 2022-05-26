import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {

  const [user, loading,] = useAuthState(auth);

  const [admin] = useAdmin(user)
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
          <li><Link to='/dashboard'>My profile</Link></li>
          {!admin && <li><Link to='/dashboard/myorder'>My order</Link></li>}

         
          {!admin && <li><Link to='/dashboard/review'>Add Review</Link></li>}
          {admin && <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link></li>
          }
          {admin && <li><Link to='/dashboard/addproduct'>Add a product</Link></li>}
          {admin && <li><Link to='/dashboard/manageproduct'>Manage product</Link></li>}
          {admin && <li><Link to='/dashboard/allusers'>Make Admin</Link></li>}
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;