import React from 'react';

const Blog = () => {
    return (
        <div className='container p-6'>
            <h1 className='text-2xl py-4'>How to improve the performance of react application
            </h1>
            <p className='text-base'>1. রিয়েক্ট এ যখন রেন্ডার হয় তখন উপর থেকে নিচে এক্সিকিউট হয়। একি ফাইলে সব কোড লিখলে রেন্ডার হতে বেশি সময় লাগবে। এর জন্য এএপ্লিকেশন কে ছোট ছোট কম্পোনেন্ট এ ভাগ করে দিতে হবে। এতে অপ্রয়োজনীয় কোড রেন্ডার হবে না। সময় ও কম লাগবে

                ২ অপ্রয়োজনীয় রিরেন্ডার করা বন্ধ করতে হবে। এক্ষেত্রে useMemo / callback hook ব্যাবহার করা যেতে পারে

                ৩.immutable data structure ব্যবহার করে</p>



            <h1 className='text-2xl p-4'> What are the different ways to manage a state in a React application?</h1>
            <p >1.hooks
                2.context api
                3.Redux
                4 Recoil
                5. UseReducers</p>



            <h1 className='text-2xl p-4'>What is a unit test? Why should write unit tests?</h1>
            <p >সফটওয়্যার ডেভেলপমেন্ট এ কোড কে ছোট ছোট পার্ট এ ভাগ করে নিয়ে এটাকে টেস্ট করা হয়। এটাকে unit test বলে।
                একসাথে বড় সফটওয়্যার টেস্ট করতে গেলে সমস্যা হয়।ডিবাগ করাও কঠিন।ছোট ছোট পার্ট এ ভাগ করে ডিবাগ করা সহজ হয় কাজ ও তুলনামূলক সহজ হয় এর জন্য ইউনিট টেস্ট করা হয়</p>


            <h1 className='text-2xl p-4'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p >
                ১.স্টেট ডাইরেক্ট সেট করলে আগের স্টেট রিপ্লেস করে দেয়
                ২ lose control of the state across all components


            </p>
            <h1 className='text-2xl p-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p >
                এরে এর উপর ম্যাপ চালাতে হবে। এর পর ম্যাপের প্রতিটা ভ্যালুর সাথে ' সার্চ কীওয়ার্ড ' তুলনা করে দেখতে হবে। যদি ম্যাচ করে তাহলে ওই ম্যাপের ভ্যালু টা রিটার্ন করে দিতে হবে।
                আর ম্যাচ না করলে null রিটার্ন করতে হবে


            </p>
        </div>
    );
};

export default Blog;