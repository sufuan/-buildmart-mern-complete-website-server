import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {


    const [user, loading] = useAuthState(auth);
    const [profileInfo, setProfileInfo] = useState([])

    console.log(user);



    const handleSubmit = e => {
        e.preventDefault()

        const profile = {
            name: user.displayName,
            email: user.email,
            phone: e.target.phone.value,
            location: e.target.phone.value,
            school: e.target.school.value,
            college: e.target.college.value,
            university: e.target.university.value,
            linkdein: e.target.linkdein.value,
        }
        // console.log(profile)

        const url = `https://infinite-river-32307.herokuapp.com/profile?email=${user.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        }).then(res => res.json())
            .then(data => {

                  console.log(data);
            })


    };



    useEffect(() => {


        if (user) {
            fetch(`https://infinite-river-32307.herokuapp.com/profile?email=${user.email}`, {
                method: 'Get',
                headers: {

                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProfileInfo(data)


                })
        }

    }, [user])













    return (
        <div className='mt-10'>
            <h1 className='text-4xl'>Hello {user.displayName}, Welcome to your profile </h1>
            {
                profileInfo.map(profile => {
                    return (
                        <div>
                            <div>
                                <h1 className='text-2xl mt-5'>contact information</h1>
                                <p className='textxl font-semibold'>Name :{user.displayName}</p>
                                <p className='textxl font-semibold'>Email : {user.email}</p>
                                <p className='textxl font-semibold'>Phone :{profile?.phone}</p>
                                <p className='textxl font-semibold'>Location :{profile?.location}</p>

                            </div>

                            <div>
                                <h1 className='text-2xl mt-5'>Edcucation information</h1>
                                <p className='textxl font-semibold'>School :{profile?.school}</p>
                                <p className='textxl font-semibold'>College :{profile?.college}</p>
                                <p className='textxl font-semibold'>University :{profile?.university}</p>


                            </div>

                            <div>
                                <h1 className='text-2xl mt-5'>Others</h1>
                                <p className='textxl font-semibold'>Linkedin profile Link :{profile?.linkdein}</p>


                            </div>




                        </div>
                    )
                })
            }





            <div>
                <h1 className='text-center text-2xl my-8'>Update your profile</h1>


                <form className='' onSubmit={handleSubmit}>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <input name='name' Value={user.displayName} disabled className='input input-bordered input-accent w-full max-w-xs' placeholder='name' />
                        <input name='email' value={user.email} disabled className='input input-bordered input-accent w-full max-w-xs' placeholder='email' />
                        <input name='phone' className='input input-bordered input-accent w-full max-w-xs' placeholder='phone' type="text" />
                        <input name='location' className='input input-bordered input-accent w-full max-w-xs' placeholder='location' type="text" />

                    </div>
                    <h1 className='font-bold my-5'>Education Info</h1>

                    <div className='grid lg:grid-cols-2 gap-4'>
                        <input name='school' className='input input-bordered input-accent w-full max-w-xs' placeholder='school' type="text" />
                        <input name='college' className='input input-bordered input-accent w-full max-w-xs' placeholder='College' type="text" />
                        <input name='university' className='input input-bordered input-accent w-full max-w-xs' placeholder='university' type="text" />
                    </div>


                    <h1 className='font-bold my-5'>Others</h1>

                    <div className='grid lg:grid-cols-2 gap-4'>
                        <input name='linkdein' className='input input-bordered input-accent w-full max-w-xs' placeholder='linkdein Link' type="text" />

                    </div >
                    <div className="text-center mt-5">
                        <input className='btn btn-primary  ' type="submit" />
                    </div>
                </form>





            </div>
        </div>
    );
};

export default MyProfile;