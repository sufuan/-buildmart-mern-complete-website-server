import React from 'react';
import axios from 'axios';


const handleSubmit = e => {
    e.preventDefault()

    const productInfo = {
        price: e.target.price.value,
        img: e.target.img.value,
        minQuantity: e.target.minQuantity.value,
        availableQuantity: e.target.availableQuantity.value,
        name: e.target.name.value,
        category: e.target.category.value,
        description: e.target.description.value,

    }

    // console.log(productInfo);

    fetch('http://localhost:5000/uploadpd', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productInfo)
    })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            // if(data.success){
            //     toast("Order placed")

            // }
            // else{
            //     toast.error(`something went wrong`)
            // }
            // e.reset()
        });


}

const AddProduct = () => {
    return (
        <div>
            <h1 className='text-2xl text-center my-5'>Upload your Product</h1>
            {/* <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"> */}

                    <form className='grid lg:grid-cols-3 gap-5' onSubmit={handleSubmit}>
                        
                        <input  class="input w-full max-w-xs" required type="text" name="name" id="name" placeholder='Product name' />

                        <input class="input w-full max-w-xs" required type='number' id="price" name='price' placeholder='Price' />

                        <input class="input w-full max-w-xs" required type="text" name="description" id="description" placeholder='product description' />

                        <input class="input w-full max-w-xs" required type="number" name="minQuantity" id="minQuantity" placeholder='minQuantity' />

                        <input class="input w-full max-w-xs" required type="number" name="availableQuantity" id="availableQuantity" placeholder='availableQuantity' />
                        <input class="input w-full max-w-xs" required type="text" name="category" id="category" placeholder='category' />

                        <input class="input w-full max-w-xs" required type="text" name="img" id="img" placeholder='img link' />

                        <input type="submit" value="uoload" />

                    </form>



                </div>
            // </div>







        // </div>
    );
};

export default AddProduct;