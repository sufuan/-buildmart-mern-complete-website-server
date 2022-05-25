import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from './Product';


const Products = () => {

    const [products, setProducts] = useProducts()
   
    return (
        <div>
            products {products.length}


            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl text-center py-5 font-bold text-gray-700">Explore all exciting Product</h2>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">

                    {products.map(product=><Product
                    product={product}
                    key={product._id}
                    ></Product>)}
                      

                    </div>

                </div>

            </div>












          
        </div>
    );
};

export default Products;