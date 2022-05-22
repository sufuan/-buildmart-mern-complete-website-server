import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchasepage = () => {
    const [user, loading, error] = useAuthState(auth);

    const { id } = useParams()
    const [product, setProduct] = useState({})

    const { _id, description, img, name, minQuantity, availableQuantity, category, price } = product
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)

            })
    }, [id])


    let Quantity = minQuantity

    //  set usestate initial value as minquantity
    const [count, setCount] = useState(minQuantity)
    useEffect(() => {
        setCount(minQuantity)
    }, [minQuantity])




    if (count > minQuantity) {

        Quantity = count

    }
    else if (count < minQuantity) {
        alert('tham')
        Quantity = minQuantity
    }


    console.log(Quantity)
    // console.log(minQuantity);









    const handleOrder = e => {
        e.preventDefault();

        console.log(Quantity);

        const orderInfo = {
            orderId: _id,
            productName: name,
            price: price,
            email: user.email,
            userName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            Quantity

        }




        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if(data.success){
                    toast("Order placed")
                   
                }
                else{
                    toast.error(`something went wrong`)
                }
                e.reset()
            });

           


    }






    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">

                <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                        <div className="lg:col-start-8 lg:col-span-5">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-medium text-gray-900">{name}</h1>
                                <h2 className="text-2xl font-medium text-gray-900"> {price}</h2>
                            </div>


                            <div className="mt-4">

                                <div className="flex items-center">
                                    <p className=" text-gray-700">
                                        Category:
                                    </p>

                                    <div className="ml-4 flex">
                                        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {category}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <p className="">
                                    Quantity:
                                </p>

                                <div className="ml-4 flex">
                                    <p className="text-sm font-medium ">
                                        <button className='text-2xl p-2' onClick={() => setCount(count + 1)}>+ </button>
                                        <span className='m-2'> {Quantity}</span>
                                        <button className='text-2xl p-2' onClick={() => setCount(count - 1)}>-</button>
                                    </p>
                                </div>
                            </div>


                        </div>
                        {/* img  */}
                        <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                            <div className="text-center">
                                <img className='w-1/2 mx-auto ' src={img} alt="" />
                            </div>
                        </div>



                        <div className="mt-8 lg:col-span-5">

                            <div className="mt-10">
                                <h1 className='texl-xl'>Product Description:</h1>
                                <h2 className="text-sm font-medium text-gray-900">{description}</h2>


                            </div>




                            <form className='mt-9' onSubmit={handleOrder}>
                                <h1 className='text-2xl my-2'>contact information</h1>

                                <div className='flex'>
                                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input  input-sm input-bordered w-1/2 max-w-xs mx-2" />

                                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-sm  input-bordered w-1/2 max-w-xs" />
                                </div>

                                <h1 className='text-2xl my-2'>Shipping Information</h1>

                                <div className="flex">
                                    <input type="text" name='address' required placeholder="address" class="input input-sm input-bordered w-1/2 max-w-xs mx-2" />
                                    <input type="text" name='phone' required placeholder="phone" class="input input-sm input-bordered w-1/2 max-w-xs" /> <br />

                                </div>

                                <div className="text-center">
                                    <input type="submit" value="Place Order" className="btn w-full btn-secondary  max-w-xs my-2" />

                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Purchasepage;