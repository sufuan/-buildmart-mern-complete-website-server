import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { Link } from 'react-router-dom';




const MyOrders = () => {
    const [user, loading,] = useAuthState(auth);
    const [myorders, setMyorders] = useState([])


    useEffect(() => {


        if (user) {
            fetch(`http://localhost:5000/myitems?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyorders(data))
        }

    }, [user])



    return (
        <div>
            <h2>My orders: {myorders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>payment</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.productName}</td>
                                <td>{a.Quantity}</td>
                               
                                
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-primary btn-xs'>Payment</button></Link>}</td>
                            <td>{(a.price && a.paid) && <span className='text-success'>paid</span> }</td>
                                  <td>{a.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;