import React from 'react';
import swal from 'sweetalert';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {

    const [products, setProducts] = useProducts()


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




                        const url = `https://infinite-river-32307.herokuapp.com/product/${id}`
                        fetch(url, {
                            method: "DELETE",

                        })
                            .then(res => res.json())
                            .then(data => {
                               
                                if (data.deletedCount > 0) {
                                  console.log('deleted');
                                  const remaining = products.filter(product => product._id !== id)
                                  setProducts(remaining)
                                }
                            })






                    })
                } else {
                    swal("Your file is safe!");
                }
            });


    }


    return (
        <div>

            <section>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Available Quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map(product => {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {product.name}
                                            </th>


                                            <td class="px-6 py-4">
                                                {product.category}
                                            </td>

                                            <td class="px-6 py-4">
                                                {product.availableQuantity}
                                            </td>
                                            <td class="px-6 py-4">
                                                {product.price}
                                            </td>
                                            <td class="px-6 py-4 ">
                                                {<button onClick={() => handleDelete(product._id)} className='btn btn-error btn-xs'>delete</button>
                                                }
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

export default ManageProduct;