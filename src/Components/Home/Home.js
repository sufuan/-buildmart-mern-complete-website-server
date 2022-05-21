import React from 'react';

const Home = () => {
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
                                    <div className="rounded-md shadow">
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Get started</button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> live</button>
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

            <div class="testimonial-1 py-4 md:py-12">
                <div class="container mx-auto px-4">
                    <div class="md:flex md:flex-wrap md:-mx-4 mb-4">

                        <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
                            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                                    <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p class="text-gray-600">"It really saves me time and effort. FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks was worth a fortune to my company. FWR Bootstrap Blocks has really helped our business. I'm good to go."</p>
                                    <div class="text-gray-900 font-bold uppercase mt-6">- Jesse D.</div>
                                    <div class="text-gray-600">Apple</div>
                                </div>
                            </div>
                        </div>

                        <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
                            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                                    <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p class="text-gray-600">"Needless to say we are extremely satisfied with the results. Keep up the excellent work. Your company is truly upstanding and is behind its product 100%. Thanks guys, keep up the good work!"</p>
                                    <div class="text-gray-900 font-bold uppercase mt-6">- Annabell M.</div>
                                    <div class="text-gray-600">Microsoft</div>
                                </div>
                            </div>
                        </div>

                    

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;