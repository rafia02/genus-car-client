import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({service}) => {
    console.log(service)
    const {title, _id, price, img, description} = service
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
           <PhotoProvider>
              <PhotoView src={img}>
              <figure><img className='h-52' src={img} alt="Shoes" /></figure>
              </PhotoView>
           </PhotoProvider>
           
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-bold text-lg'>Price: ${price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;