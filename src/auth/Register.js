import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../assets/icons/google.png'


const Register = () => {
    //  const [customMsg, setCustomMsg] = useState('')
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, watch, getValues, handleSubmit } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user,gUser, from, navigate])





    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // useEffect(() => {
    //     if (error || gError || updateError) {
    //         switch (error.code) {
    //             case 'auth/email-already-in-use':
    //                 setCustomMsg({ ...customMsg, customMsg: 'email is already registered' })
    //                 console.log({customMsg});
    //                 break

    //             case 'auth/internal-error':
    //                 setCustomMsg({ ...customMsg, customMsg: 'email is already registered' })

    //                 break
    //             case 'auth/network-request-failed':
    //                 setCustomMsg({ ...customMsg, customMsg: 'email is already registered' })

    //                 break
    //             default:
    //                 setCustomMsg({ ...customMsg, customMsg: 'email is already registered' })

    //                 break
    //         }
    //     }
    // }, [])



    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (user || gUser) {
    //     navigate('/product');
    // }





    const validateOptions = {
        name: { required: "Name is required" },
        email: {
            required: "Email is required",
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }

        },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
            }
        },
        confirmPassword: {
            required: true,

            validate: value =>
                value === password.current || "The passwords do not match"


        }

    }



    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');

    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-sm my-2  input-bordered w-full max-w-xs"
                                {...register("name", validateOptions.name)}
                            />
                            <small className="text-red-600">
                                {errors?.name && errors.name.message}
                            </small>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-sm my-2  input-bordered w-full max-w-xs"
                                {...register("email", validateOptions.email)}
                            />
                            <small className="text-red-600">
                                {errors?.email && errors.email.message}
                            </small>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-sm my-2 input-bordered w-full max-w-xs"
                                {...register("password",validateOptions.password)}
                            />
                            <small className="text-red-600">
                                {errors?.password && errors.password.message}
                            </small>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-sm my-2 input-bordered w-full max-w-xs"
                                {...register("confirmPassword", validateOptions.confirmPassword)}
                            />
                            <small className="text-red-600">
                                {errors?.confirmPassword && errors.confirmPassword.message}
                            </small>
                        </div>

                        {signInError}
                        {/* {customMsg} */}
                        <input className='btn w-full max-w-xs btn-sm text-white' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>
                    <div className="divider">OR</div>
                   
                    <div className=" flex justify-between gap-3">
                        <div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline btn-sm"
                            > <img className='w-50 h-7' src={googleLogo} alt="" /></button>
                        </div>
                        <div>
                            <button disabled className="btn btn-outline btn-sm"
                            >Facebook</button>
                        </div>
                        <div>
                            <button disabled  className="btn btn-outline btn-sm"
                            >Github</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Register;