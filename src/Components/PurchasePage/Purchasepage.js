import React from 'react';
import { useParams } from 'react-router-dom';

const Purchasepage = () => {
    const { id } = useParams()
    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">

                <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                        <div className="lg:col-start-8 lg:col-span-5">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-medium text-gray-900">name</h1>
                                <h2 className="text-xl font-medium text-gray-900">Price $:</h2>
                            </div>


                            <div className="mt-4">

                                <div className="flex items-center">
                                    <p className=" text-gray-700">
                                        Supplier:
                                    </p>

                                    <div className="ml-4 flex">
                                        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            supplir
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <p className="">
                                    Quantity:                        </p>

                                <div className="ml-4 flex">
                                    <p className="text-sm font-medium ">
                                        1
                                    </p>
                                </div>
                            </div>


                        </div>
                        {/* img  */}
                        <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                            <div className="text-center">
                                {/* <img className='w-1/2 mx-auto ' src={img} alt="" /> */}
                            </div>
                        </div>



                        <div className="mt-8 lg:col-span-5">
                            <button

                                className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                deliver
                            </button>
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
             <h1 className='text-2xl my-2'>contact information</h1>
             <input type="text" placeholder="name" class="input input-sm input-bordered w-full max-w-xs" />
             <input type="text" placeholder="email" class="input input-sm input-bordered w-full max-w-xs" />

             <h1 className='text-2xl my-2'>contact information</h1>

             <input type="text" placeholder="address" class="input input-sm input-bordered w-full max-w-xs" />
             <input type="text" placeholder="phone" class="input input-sm input-bordered w-full max-w-xs" />


         </div>


            </div>
        </div>
    );
};

export default Purchasepage;