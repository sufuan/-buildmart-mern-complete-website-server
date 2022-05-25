import React, { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react'

const ManageAllOrders = () => {

  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/allorders')
      .then(res => res.json())
      .then(data => {
        setAllOrders(data)
        console.log(data);
      })
  }, [])



  const handleDelete = (id) => {


    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your  file has been deleted!", {
            icon: "success",
          }).then((result) => {
            console.log('tur');




            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
              method: "DELETE",

            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  console.log('deleted');
                  const remaining = allOrders.filter(product => product._id !== id)
                  setAllOrders(remaining)
                }
              })






          })
        } else {
          swal("Your file is safe!");
        }
      });


  }


  const handleUpdateStatus = id => {
    console.log('update');
    const status={
      status:'shipped'
    }

    const url = `http://localhost:5000/order/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(status)
  }).then(res=>res.json())
  .then(data => {
     
      console.log(data);
  })





  }


  return (
    <div>
      al orders {allOrders.length}
      <section>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>

                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>

                <th scope="col" class="px-6 py-3">
                  User Name
                </th>
                <th scope="col" class="px-6 py-3">
                  payment status
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                {/* <th scope="col" class="px-6 py-3">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>

              {
                allOrders.map(order => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {order.productName}
                      </th>


                      <td class="px-6 py-4">
                        {order.Quantity}
                      </td>
                      <td class="px-6 py-4">
                        {order.userName}
                      </td><td class="px-6 py-4">
                        {order.paid ? <h1 className='text-success font-bold' >paid</h1> : <h1 >unpaid</h1>}
                      </td><td class="px-6 py-4">
                        {!order.shipped ? <button onClick={() => handleUpdateStatus(order._id)} className='btn btn-success btn-xs'>pending</button> : <h1 >shipped</h1>}
                      </td>
                      {/* <td class="px-6 py-4 text-right">
                        {!order.paid && <button onClick={() => handleDelete(order._id)} className='btn btn-error btn-xs'>delete</button>
                        }
                      </td> */}
                    </tr>

                  )
                })
              }

            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default ManageAllOrders;