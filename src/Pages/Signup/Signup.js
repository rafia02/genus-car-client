import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/login/login.svg'
import { AuthContex } from '../../Contaxt/ContextProvider';

const Signup = () => {
    const {signup} = useContext(AuthContex)

    const handleSignup =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value
        // console.log(form ,name, email, password, ) 
        signup(email, password)
        .then(res =>{
            const user = res.user
            alert('sucessfully sign up')
            console.log(user)
        })
        .catch(e=> console.error(e))

        
    }

    return (
        <div className="hero  pt-10 pb-20 ">
            <div className="hero-content grid grid-cols-2 gap-6">
                <div className="text-center mr-5 lg:text-left">
                    <img className='w-3/4' src={img1} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-4 font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary' value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center pb-3'>Already have an accout? <Link to="/login" className='font-bold text-blue-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;