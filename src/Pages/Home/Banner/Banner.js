import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
import CarosolItem from './CarosolItem';

const Banner = () => {
    const bannarData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel rounded-lg py-12 w-full">


     
                {
                    bannarData.map(data=> <CarosolItem
                        key={data.id}
                        item={data}
                        ></CarosolItem>)
                }
  




{/* 
             <div id="slide1" className="carousel-item  relative w-full">
                <div className='carosel-container'>
                    <img src={img1} className="w-full" alt='' />
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
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
            </div>   */}



            
        </div>
    );
};

export default Banner;