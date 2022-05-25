import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
const Myreviews = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    console.log(rating)

    const handleSubmit=e=>{
        e.preventDefault()


        const reviews ={
            rating:rating,
            reviewText:e.target.text.value
        }




        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if(data.success){
                    swal("Good job!", "Review Added", "success");
                   setRating(null)
                }
                else{
                    toast.error(`something went wrong`)
                }
                e.reset()
            });

           
    }

    return (
        <div>
            <h1 className='text-2xl text-center'>Add a review</h1>
            <div className='flex justify-center mt-5'>
                {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1

                    return <label>
                        <input style={{ display: 'none' }}
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar style={{ cursor: 'pointer', transition: 'color 2ms' }}
                            size={50}
                            color={ratingValue <= (rating || hover) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        ></FaStar>
                    </label>






                  








                
                })}
            </div>







           <form onSubmit={handleSubmit}>
           <div class="flex justify-center mt-5">
                <div class="mb-3 xl:w-96">
                    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
                    >Add a comment</label>
                    <textarea name='text'
                        class="  form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                    ></textarea>
                </div> 
                
            </div>
               <div className="text-center">
               <input className="btn btn-secondary"  type="submit" value="submit" />

               </div>
           </form>
















        </div>
    );
};

export default Myreviews;




























// {reviews.map(review => {
//     return (
//         <div>
//             <p class="text-gray-600">{review.reviewText}</p>
//             <p class="text-gray-600">rating  {[...Array(5)].map((star, i) => {

//                 const ratingValue = i + 1

//                 return <label>

//                     <FaStar
//                         size={30}
//                         color={ratingValue <= (review.rating) ? '#ffc107' : '#e4e5e9'}

//                     ></FaStar>
//                 </label>
//             })}</p>
//             <div class="text-gray-900 font-bold uppercase mt-6">- Jesse D.</div>
//             <div class="text-gray-600">Apple</div>
//         </div>
//     )
// }

// )}