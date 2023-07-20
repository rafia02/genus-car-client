import React from 'react';

const CarosolItem = ({item}) => {
    const {image, prev, next, id} = item
    return (
        <div id={ `slide${id}` } className="carousel-item  relative w-full">
        <div className='carosel-container'>
            <img src={image} className="w-full" alt='' />
        </div>
        
        <div className="absolute font-bold text-6xl text-white flex justify-start  transform -translate-y-1/2 left-20  top-1/4">
            <h1>Affordable<br />
            Price For Car <br />
            Servicing 
            </h1>   
        </div>
        <div className="absolute text-xl text-white flex justify-start  transform -translate-y-1/2 left-20 w-3/6 top-1/2">
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p> 
        </div>
        <div className="absolute text-xl text-white flex justify-start  transform -translate-y-1/2 left-20  top-3/4">
        <button className="btn btn-secondary mr-5">Discover More</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={ `#slide${prev}` } className="btn btn-circle mr-5">❮</a> 
            <a href={ `#slide${next}` } className="btn btn-circle">❯</a>
        </div>
    </div> 

    );
};

export default CarosolItem;