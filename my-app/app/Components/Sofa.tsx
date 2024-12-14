import React from 'react'
import Image from "next/image";
import sofa1 from '../assets/de.png';

const Sofa = () => {
  return (
    <div className='bg-red-50 py-10'>
      <div className='flex flex-col md:flex-row items-center justify-around'>
        <div className='mb-8 md:mb-0'>
          <Image src={sofa1} alt="Asgaard Sofa" width={800} height={500} className="object-cover" />
        </div>
        <div className='text-center md:text-left'>
          <h5 className='text-2xl sm:text-3xl'>New Arrivals</h5>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-4'>Asgaard Sofa</h2>
          <div className='flex items-center justify-center md:justify-start'>
            <button className='text-center border-2 py-2 px-8 sm:px-12 lg:px-16 mt-6 border-black'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sofa;
