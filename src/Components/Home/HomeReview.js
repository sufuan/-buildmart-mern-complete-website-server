import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';


const HomeReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])






    return (
        <div class="testimonial-1 py-4 md:py-12">
            <div class="container mx-auto px-4">
                <div class="md:flex md:flex-wrap md:-mx-4 mb-4">


                    {reviews.map(review => {
                        return (
                            <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
                                <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                                    <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                                        <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p class="text-gray-600">"It really saves me time and effort. FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks was worth a fortune to my company. FWR Bootstrap Blocks has really helped our business. I'm good to go."</p>











                                     



                                        <div>
                                            <p class="text-gray-600">{review.reviewText}</p>
                                            <p class="text-gray-600 flex"> {[...Array(5)].map((star, i) => {

                                                const ratingValue = i + 1

                                                return <label>

                                                    <FaStar
                                                        size={30}
                                                        color={ratingValue <= (review.rating) ? '#ffc107' : '#e4e5e9'}

                                                    ></FaStar>
                                                </label>
                                            })}</p>
                                           
                                            
                                        </div>





                                      
                                    </div>
                                </div>
                            </div>
                        )
                    })}







                </div>
            </div>
        </div>
    );
};

export default HomeReview;