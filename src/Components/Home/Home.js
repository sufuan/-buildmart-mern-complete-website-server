import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import HomeProducts from './HomeProducts';
import HomeReview from './HomeReview';

const Home = () => {
    const [products, setProducts] = useProducts()
    console.log(products);
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>



                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">High-Performance Machine</span><br />
                                    <span className="block text-indigo-600 xl:inline">Profitable Solutions</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Custom Solutions to Suit Your Need
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">Explore</button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1560953814-e638686b1267?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                        alt=""
                    />
                </div>
            </div>


            {/* products  */}


            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl text-center py-5 font-bold text-gray-700">Check out what's hittin' our shelves!</h2>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">


                        {

                            products?.slice(0, 3).map(product => <HomeProducts
                                product={product}
                                key={product._id}
                            ></HomeProducts>)
                        }

                    </div>

                </div>

            </div>


            {/* stats */}

            <div className="bg-gray-50 pt-12 sm:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            There are good reasons to be proud
                        </h2>

                    </div>
                </div>
                <div className="mt-10 pb-12 bg-white sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-50" />
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Groth</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">97%</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Satisfied Customers</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">10k</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* reviw */}

            <HomeReview></HomeReview>

            {/* contact  */}



            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Sales Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    If you need assistance regarding a service from us, let’s get it on table with one of our specialists, ready to help you.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+880 123 4567</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@buildmart.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Technical Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">

                                    Support Ticket
                                    Do you have an important matter to discuss about a purchased service from us? You can open a support ticket for a quick solution:
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                       <h1 className='text-2xl'>Open a Ticket Now</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* newsletter  */}


            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white"> Get notified when we’re launching.</h2>
                            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                                Sign up for our newsletter

                            </p>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <form className="sm:flex">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input

                                    type="email"

                                    required
                                    className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    Notify me
                                </button>
                            </form>
                            <p className="mt-3 text-sm text-indigo-100">
                                We care about the protection of your data.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;