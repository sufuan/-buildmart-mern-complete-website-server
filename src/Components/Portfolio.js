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
                                <h1>tav</h1>
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
                </div>
        </div>
    );
};

export default Portfolio;