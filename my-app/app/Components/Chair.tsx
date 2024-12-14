import React from 'react'
import Image from "next/image";
import chair1 from '../assets/chair1.png';
import chair2 from '../assets/chair2.png';

const Chair = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-around pt-10 pb-16 bg-red-50'>
            <div className='text-center md:text-left'>
                <Image src={chair1} alt="Side Table 1" width={400} />
                <h2 className='text-3xl font-bold mt-4'>Side table</h2>
                <button className='border-b-2 border-black mt-4'>View More</button>
            </div>
            <div className='mt-10 md:mt-0'>
                <Image src={chair2} alt="Side Table 2" width={500} className='mt-4' />
                <h2 className='text-3xl font-bold mt-8 md:mt-20'>Side table</h2>
                <button className='border-b-2 border-black mt-4'>View More</button>
            </div>
        </div>
    )
}

export default Chair
