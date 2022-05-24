import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

   const [allOrders, setAllOrders] = useState([])

   useEffect(()=>{
       fetch('http://localhost:5000/allorders')
       .then(res=>res.json())
       .then(data=>setAllOrders(data))
   },[])



   const handleDelete = (id) => {
    const confirmDelete = window.confirm('wannna delete?')
    if (confirmDelete) {
      console.log(id);

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










    }
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
                </th><th scope="col" class="px-6 py-3">
                   Action
                </th>
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
                        unpaid
                      </td><td class="px-6 py-4">
                        pending
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button onClick={() => handleDelete(order._id)} className="font-medium mx-2 text-red-600  hover:underline">delete</button>
                        </td>
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