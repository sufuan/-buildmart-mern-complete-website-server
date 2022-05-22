import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

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

  
    let Quantity =minQuantity

    //  set usestate initial value as minquantity
   const [count, setCount] = useState(minQuantity)
    useEffect(() => {
        setCount(minQuantity)
    }, [minQuantity])




     if(count>minQuantity){
       
        Quantity=count
         
    }
    else if (count<minQuantity) {
        alert('tham')
        Quantity=minQuantity
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
                // if(data.success){
                //     toast(`Appointment is set, ${formattedDate} at ${slot}`)
                // }
                // else{
                //     toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                // }
                // setTreatment(null);
                // refetch();
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
                                        {minQuantity}
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
                            <button onClick={()=>setCount(count+1)}

                                className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                deliver
                            </button>

                            <button onClick={()=>setCount(count-1)}>decrease</button>
                            <form >
                                <h1 className='mt-8 text-lg '>Restock New Arrival Items</h1>

                                <div className="flex items-center  justify-between">

                                    <div>
                                        <input className=" appearance-none block  py-2 px-10 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-5" name='quantity' type="number" placeholder='restock item ' required />
                                    </div>

                                    <button
                                        type="submit"
                                        className=" bg-indigo-600 border border-transparent rounded-md py-2 px-10 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"                  >
                                        Restock
                                    </button>

                                </div>

                            </form>





                            <div className="mt-10">
                                <h1 className='texl-xl'>Product Description:</h1>
                                <h2 className="text-sm font-medium text-gray-900">description</h2>


                            </div>





                        </div>
                    </div>

                </div>
            </div>
            <div className=' m-9'>
                <div>
                    <form onSubmit={handleOrder}>
                        <h1 className='text-2xl my-2'>contact information</h1>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input  input-sm input-bordered w-full max-w-xs mx-2" />

                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-sm  input-bordered w-full max-w-xs" />

                        <h1 className='text-2xl my-2'>Shipping Information</h1>

                        <input type="text" name='address' required placeholder="address" class="input input-sm input-bordered w-full max-w-xs mx-2" />
                        <input type="text" name='phone' required placeholder="phone" class="input input-sm input-bordered w-full max-w-xs" /> <br />


                        <div className="text-center">
                            <input type="submit" value="Submit" className="btn btn-secondary btn-sm  max-w-xs my-2" />

                        </div>
                    </form>

                </div>


            </div>
        </div>
    );
};

export default Purchasepage;