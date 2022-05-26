import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">

                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">pro name</h1>
                        </div>

                    </div>
                </div>
                <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">K M Abu Sufian</h1>
                </div>
            </div>


            {/* Tabs */}
            <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <h1>profile</h1>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Description list */}
            <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Phone</dt>
                        <dd class="mt-1 text-sm text-gray-900">8801315775550</dd>
                    </div>

                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 text-sm text-gray-900">abu49539@gmail.com</dd>
                    </div>



                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Education</dt>
                        <dd class="mt-1 text-sm text-gray-900">IIT ,Jahangirnagar University</dd>
                    </div>




                    <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">skills</dt>
                        <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5">

                            <p>HTML ,CSS , Bootstrap , Tailwind ,daisyUI, JavaScript , Es6 , React , React Router , React hooks , context api , firebase , firebase auth hooks , jwt , nodejs , expressjs, mongodb , mongoose,Figma </p>
                        </dd>
                    </div>
                </dl>

                <div className='my-5'>
                    <h1 className='text-2xl text-center'>My project </h1>
                    <div className='flex justify-between'>
                        <div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Booking website Ui</h2>
                                <p>user can select date range and find hotel/ resorts .also can view  single hotel info from search page </p>
                                <div class="card-actions justify-end">
                                    <p className='font-semibold'>view Live <span className='text-blue-600'>https://astounding-pithivier-5a1f9f.netlify.app/</span></p>
                                </div>
                            </div>
                        </div><div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Admin Dashboard</h2>
                                <p>professional dashboard .admin can view list ,update ,add new user and products. analytical charts implemented on home page</p>
                                <div class="card-actions justify-end">
                                <p className='font-semibold'>view Live <span className='text-blue-600'>https://ornate-jalebi-cbf737.netlify.app/</span></p>
                                </div>
                            </div>
                        </div><div class="card bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Advanced search app</h2>
                                <p>search by  username ,email with auto filter </p>
                                <div class="card-actions justify-end">
                                <p className='font-semibold'>view Live <span className='text-blue-600'> https://glistening-arithmetic-296a7d.netlify.app/</span></p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;