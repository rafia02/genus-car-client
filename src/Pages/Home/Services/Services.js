import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("https://geinus-car-sever.vercel.app/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service=><SingleService
                key={service._id}
                service={service}
                ></SingleService>)
            }
        </div>
    );
};

export default Services;