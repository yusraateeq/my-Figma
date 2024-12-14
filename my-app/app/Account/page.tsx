"use client"

import React from 'react';
import Image from "next/image";
import contactbanner from '../assets/contact.jpeg';
import Header from '../Components/Header';
import rightbutton from '../assets/right-button.png';
import contactlogo from '../assets/contactlogo.png';
import Footer from '../Components/Footer';

const Banner = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <div className="relative">
                <Image src={contactbanner} alt="Banner" className="object-cover w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center  bg-white bg-opacity-30">
                    <div className="flex justify-center items-center mb-4">
                        <Image src={contactlogo} alt="Contact Logo" width={100} />
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Account</h2>
                    <div className="gap-3 flex items-center justify-center">
                        <a href="/" className="hover:text-black">Home</a>
                        <Image src={rightbutton} alt="" width={20} />
                        <a href="/Account" className="hover:text-black">Account</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 mt-20">

                <div className="grid grid-cols-1 md:grid-cols-2 mt-28 gap-10 md:gap-16 lg:gap-44">
                    {/* Left Section (can be added later if needed) */}

                    {/* Right Section */}
                    <div className="bg-white rounded-lg p-6">
                        <form className="space-y-6">
                            <h2 className='text-3xl sm:text-4xl font-bold'>Log In</h2>
                            <div>
                                <label className="block text-lg mb-1 font-bold" htmlFor="email">
                                    Username or email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <div className='flex items-center gap-6'>
                                <input type="checkbox" name="check" id="" width={40} />
                                <h6>Remember me</h6>
                            </div>
                            <div className='flex items-center gap-10 mt-10'>
                                <button
                                    type="submit"
                                    className="border-2 w-52 py-4 rounded-xl border-gray-700 hover:bg-primary-600 transition-all"
                                >
                                    Log In
                                </button>
                                <h6>Lost Your Password?</h6>
                            </div>
                        </form>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <h2 className='text-3xl sm:text-4xl font-bold'>Register</h2>
                            <div>
                                <label className="block text-lg mb-1 font-bold" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                />
                            </div>
                            <p>A link to set a new password will be sent to your email address.</p>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-bold'>privacy policy.</span></p>
                            <button
                                type="submit"
                                className="border-2 w-52 py-4 rounded-xl mt-28 border-gray-700 hover:bg-primary-600 transition-all"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap justify-around gap-8 sm:gap-12 lg:gap-20 bg-red-50 py-20 px-8 sm:px-20 lg:px-28 mt-20'>
                <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
                    <h2 className='text-2xl font-bold mb-2'>Free Delivery</h2>
                    <p>For all orders over $50, consectetur adipiscing elit.</p>
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
                    <h2 className='text-2xl font-bold mb-2'>90 Days Return</h2>
                    <p>If goods have problems, consectetur adipiscing elit.</p>
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
                    <h2 className='text-2xl font-bold mb-2'>Secure Payment</h2>
                    <p>100% secure payment, consectetur adipiscing elit.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Banner;
