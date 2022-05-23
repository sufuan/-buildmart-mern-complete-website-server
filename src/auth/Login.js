import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import googleLogo from '../assets/icons/google.png'
import useToken from '../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token]=useToken(user || gUser)


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])



    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const validateOptions = {
        email: { required: "email is required" },
        password: { required: "Name is required" }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-sm my-2 input-bordered w-full max-w-xs"
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
                                className="input  input-sm my-2 input-bordered w-full max-w-xs"
                                {...register("password", validateOptions.password)}
                            />
                            <small className="text-red-600">
                                {errors?.password && errors.password.message}
                            </small>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs btn-sm text-white' type="submit" value="Login" />
                    </form>
                    <p><small>Dont have a account?<Link className='text-primary' to="/register">Create New Account</Link></small></p>
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

export default Login;