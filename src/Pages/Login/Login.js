import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/login/login.svg'
import { AuthContex } from '../../Contaxt/ContextProvider';

const Login = () => {
    const {login} = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handlelogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        login(email, password)
        .then(res=>{
            const user = res.user 
            console.log(user)
         
            const currentuser = {
                email: user.email
            }

            fetch('https://geinus-car-sever.vercel.app/jwt', {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentuser) 

            })
            .then(res =>res.json())
            .then(data => {

                console.log(data)
                localStorage.setItem('token', data.token)
            })

            alert('successfully login')
            navigate(from ,{replace: true})
        })
        .catch(e=>console.error(e))
    }
    return (
        <div className="hero  pt-10 pb-20 ">
            <div className="hero-content grid grid-cols-2 gap-6">
                <div className="text-center mr-5 lg:text-left">
                    <img className='w-3/4' src={img1} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-4 font-bold">Login</h1>
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
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
                            <input type="submit" className='btn btn-primary' value="Login" />
                        </div>
                    </form>
                    <p className='text-center pb-3'>New to genuies car? <Link to="/signup" className='font-bold text-blue-600'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;