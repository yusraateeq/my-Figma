import React from 'react'
import Image from "next/image";
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import Link from 'next/link';

const Product = () => {
    return (
        <div className='py-28'>
            <div className='text-center'>
                <h2 className='text-4xl mb-5 font-bold'>Top Picks For You</h2>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-20'>
                <div className='text-center'>
                    <Image src={pro1} alt="Trenton modular sofa_3" width={200} />
                    <p className='mt-8'>Trenton modular sofa_3</p>
                    <h4 className='font-bold text-xl mt-4'>Rs. 25,000.00</h4>
                </div>
                <div className='text-center'>
                    <Image src={pro2} alt="Granite dining table with dining chair" width={300} />
                    <p className='mt-8'>Granite dining table with dining chair</p>
                    <h4 className='font-bold text-xl mt-4'>Rs. 25,000.00</h4>
                </div>
                <div className='text-center'>
                    <Image src={pro3} alt="Outdoor bar table and stool" width={250} />
                    <p className='mt-8'>Outdoor bar table and stool</p>
                    <h4 className='font-bold text-xl mt-4'>Rs. 25,000.00</h4>
                </div>
                <div className='text-center'>
                    <Image src={pro4} alt="Plain console with teak mirror" width={250} />
                    <p className='mt-8'>Plain console with teak mirror</p>
                    <h4 className='font-bold text-xl mt-4'>Rs. 25,000.00</h4>
                </div>
            </div>
            <div className='flex items-center justify-center mt-16'>
                <Link href="/Shop">
                    <button className='border-b-2 border-black'>View More</button>
                </Link>
            </div>
        </div>
    )
}

export default Product;
