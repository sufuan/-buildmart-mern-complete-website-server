import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from '@sweetalert/with-react'


import { Link } from 'react-router-dom';




const MyOrders = () => {
    const [user, loading,] = useAuthState(auth);
    const [myorders, setMyorders] = useState([])


    useEffect(() => {


        if (user) {
            fetch(`http://localhost:5000/myitems?email=${user.email}`, {
                method: 'Get',
                headers: {

                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyorders(data)

                })
        }

    }, [user])


    const handleDelete = (id) => {
        //  console.log(id);




        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your file has been deleted!", {
                        icon: "success",
                    }).then((result) => {
                        console.log('tur');
                        console.log(id);
                        const url = `http://localhost:5000/order/${id}`
                        fetch(url, {
                            method: "DELETE",

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.deletedCount > 0) {
                                 
                                  const remaining = myorders.filter(product => product._id !== id)
                                  setMyorders(remaining)
                                }
                            })






                    })
                } else {
                    swal("Your  file is safe!");
                }
            });



















    }



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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((myorder, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{myorder.productName}</td>
                                <td>{myorder.Quantity}</td>


                                <td>{(!myorder.paid) && <Link to={`/dashboard/payment/${myorder._id}`}><button className='btn btn-primary btn-xs'>Pay Now</button></Link>}</td>


                                <td>{( myorder.paid) && <span className='text-success font-bold'>paid</span>}</td>


                                <td>{( !myorder.paid) && <button onClick={() => handleDelete(myorder._id)} className='btn btn-error btn-xs'>cancel order</button>}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;