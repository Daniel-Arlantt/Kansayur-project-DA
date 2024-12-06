import React, { useRef, useState } from 'react';
import CarrotLogo from "../images/CarrotLogo.png";
import Market from "../images/Market.png";
import Market2 from "../images/Market2.png";
import Market3 from "../images/Market3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const GetStarted = () => {

  return (
    <div className='bg-[#4cad73] w-[100vw] h-[100vh]'>
      <div className="absolute z-0 bg-[#53b97c] -left-20 w-[130vw] h-[52vh] rounded-b-[230px] rounded-bl-[200px]"></div>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[100vh]">

        <SwiperSlide>   
          <div className="col-span-12 flex flex-wrap justify-center gap-2 pt-10 z-20">
        <h1 className="main-tittle self-center mb-10 text-white text-4xl">
          Kangsayur
        </h1>
        <img className="w-9 h-9" src={CarrotLogo} alt="Carrot Logo" />
        <img className='w-[50vw]' src={Market2} alt="Market" />
      </div>
      <p className='text-white text-center main-tittle mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </SwiperSlide>

        <SwiperSlide>
        <div className="col-span-12 flex flex-wrap justify-center gap-2 pt-10 z-20">
        <h1 className="main-tittle self-center mb-10 text-white text-4xl">
          Kangsayur
        </h1>
        <img className="w-9 h-9" src={CarrotLogo} alt="Carrot Logo" />
        <img className='w-[44vw]' src={Market3} alt="Market" />
      </div>
      <p className='text-white text-center main-tittle mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </SwiperSlide>

        <SwiperSlide>
        <div className="grid relative">
      <div className="col-span-12 flex flex-wrap justify-center gap-2 pt-10 z-20">
        <h1 className="main-tittle self-center mb-10 text-white text-4xl">
          Kangsayur
        </h1>
        <img className="w-9 h-9" src={CarrotLogo} alt="Carrot Logo" />
        <img className='w-[90vw]' src={Market} alt="Market" />
      </div>

      <div className="col-span-12 text-center flex flex-col mx-5 gap-4 mt-8">

      <p className='text-white text-center main-tittle my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <Link
          to="/Admin"
          className="bg-white text-[#4CAD73] font-medium py-2 rounded-lg border border-[#4CAD73"
        >
          Get Started
        </Link>
      </div>
    </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default GetStarted