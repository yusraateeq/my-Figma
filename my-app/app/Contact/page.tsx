"use client"

import React from 'react';
import Image from "next/image";
import contactbanner from '../assets/contact.jpeg';
import Header from '../Components/Header';
import rightbutton from '../assets/right-button.png';
import contactlogo from '../assets/contactlogo.png';
import location from '../assets/location.png';
import phone from '../assets/phone.png';
import clock from '../assets/clock.png';
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
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Contact</h2>
                    <div className="gap-3 flex items-center justify-center">
                        <a href="/" className="hover:text-black">Home</a>
                        <Image src={rightbutton} alt="" width={20} />
                        <a href="/Contact" className="hover:text-black">Contact</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 mt-20">
                <div className='mx-4 md:mx-64'>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Get In Touch With Us</h2>
                    <p className="text-center text-gray-600 mb-12">
                        For more information about our products & services, please feel free to drop us
                        an email. Our staff is always here to help you out. Do not hesitate!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <Image
                                src={location}
                                alt="Location"
                                className="rounded-full object-cover"
                                width={30}
                                height={30}
                            />
                            <div className='w-48'>
                                <h4 className="text-lg font-semibold">Address</h4>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Image
                                src={phone}
                                alt="Phone"
                                className="rounded-full object-cover"
                                width={30}
                                height={30}
                            />
                            <div>
                                <h4 className="text-lg font-semibold">Phone</h4>
                                <p>Mobile: (+84) 546-6789</p>
                                <p>Hotline: (+84) 546-6789</p>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="flex items-start gap-4">
                            <Image
                                src={clock}
                                alt="Clock"
                                className="rounded-full object-cover"
                                width={25}
                                height={30}
                            />
                            <div>
                                <h4 className="text-lg font-semibold">Working Time</h4>
                                <p>Monday-Friday: 9:00 - 22:00</p>
                                <p>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="bg-white rounded-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-lg mb-1 font-bold" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                    placeholder="Abc"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold mb-1" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                    placeholder="abc@def.com"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold mb-1" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                    placeholder="This is optional"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-bold mb-1" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-5 mt-3 border-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-300"
                                    rows={4}
                                    placeholder="Hi! I'd like to ask about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="border-2 w-full md:w-60 py-2 rounded-xl mt-10 border-gray-700 hover:bg-primary-600 transition-all"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Additional Information Section */}
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
