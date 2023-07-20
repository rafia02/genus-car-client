import React, { useContext, useState } from 'react';
import {json, useLoaderData} from 'react-router-dom'
import { AuthContex } from '../../Contaxt/ContextProvider';

const Checkout = () => {
    const service = useLoaderData()
    const {_id, title, price} =service
    const {user, status} = useContext(AuthContex)
    console.log(service)
    
    const handleCheckout =(e)=>{
        e.preventDefault()
        const form = e.target 
        const name = `${form.firstname.value} ${form.lastname.value}`
        const phone = form.phone.value 
        const email = user.email 
        const message = form.message.value
        const order= {
            name,
            price,
            title,
            email,
            phone,
            status,
            service: _id
        }

        fetch('https://geinus-car-sever.vercel.app/orders',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                form.reset()
                alert('successfuly order placed')
            }

        })
        .catch(e=>console.error(e))
        
    }
    return (
        <form onSubmit={handleCheckout} className='bg-base-200 px-20  py-10 rounded my-20'>
            <h1 className='text-4xl text-accent text-center mb-10 font-bold'>{service.title}</h1>
            <div className='grid mx-auto grid-cols-1 lg:grid-cols-2 gap-6'>
            <input type="text" name="firstname" placeholder="First Name" className="input input-bordered input-accent w-full " />
            <input type="text" name="lastname" placeholder="Last Name" className="input input-bordered input-accent w-full " />
            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-accent w-full " />
            <input type="text" name="email" placeholder="Your Email" readOnly defaultValue={user?.email} className="input input-bordered input-accent w-full " />
            </div>
            <div className=' pt-6'>
            <textarea name="message" className="textarea w-full textarea-accent" placeholder="Your Message"></textarea>
            </div>
            <input type="submit" className='btn btn-accent text-white font-bold w-full mt-5' value="Order Confirm" />
        </form>
    );
};

export default Checkout;