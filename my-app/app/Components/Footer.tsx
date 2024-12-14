import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pt-28 pb-8'>
            <div className='flex flex-wrap items-center justify-between px-6 lg:px-20'>
                {/* Address Section */}
                <div className='text-gray-500 w-full sm:w-1/2 lg:w-1/4 mb-10'>
                    <p>400 University Drive Suite 200 Coral Gables,</p>
                    <h6>FL 33134 USA</h6>
                </div>
                
                {/* Links Section */}
                <div className='w-full sm:w-1/2 lg:w-1/4 mb-10'>
                    <h5 className='text-gray-500 mb-6'>Links</h5>
                    <div className='mb-4 font-bold'>
                        <Link href="/">Home</Link>
                    </div>
                    <div className='mb-4 font-bold'>
                        <Link href="/Shop">Shop</Link>
                    </div>
                    <div className='mb-4 font-bold'>
                        <Link href="/About">About</Link>
                    </div>
                    <div className='font-bold'>
                        <Link href="/Contact">Contact</Link>
                    </div>
                </div>

                {/* Help Section */}
                <div className='w-full sm:w-1/2 lg:w-1/4 mb-10'>
                    <h5 className='text-gray-500 mb-6'>Help</h5>
                    <h6 className='mb-4 font-bold'>Payment Options</h6>
                    <h6 className='mb-4 font-bold'>Returns</h6>
                    <h6 className='mb-6 font-bold'>Privacy Policies</h6>
                </div>

                {/* Newsletter Section */}
                <div className='w-full sm:w-1/2 lg:w-1/4 mb-10'>
                    <h5 className='text-gray-500 mb-6'>Newsletter</h5>
                    <div className='flex'>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder='Enter Your Email Address' 
                            className='border-b-2 border-gray-700 text-sm focus:outline-none w-full sm:w-3/4'
                        />
                        <button className='border-gray-700 border-b-2 ml-3 text-sm font-bold sm:w-1/4'>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <p className='mt-10 border-t-2 pt-8 mx-16 text-center sm:text-left'>
                2022 Meubel House. All rights reserved
            </p>
        </div>
    )
}

export default Footer
