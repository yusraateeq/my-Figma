"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog2.jpeg";
import admin from "../assets/admin.png";
import date from "../assets/day.png";
import tag from "../assets/tag.png";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const blog1 = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void {
                throw new Error('Function not implemented.');
            } } />
            <div className='pt-20 justify-center bg-gray-100 pb-20'>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 text-center">Going all-in with millennial design</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='' width={900} height={600} className='mt-10 rounded-lg' />
                </div>
                <div className="flex items-center gap-6 mt-6 justify-center">
                    <div className="flex text-gray-500 gap-2">
                        <Image src={date} alt="" width={25} />
                        <h6>Admin</h6>
                    </div>
                    <div className="flex text-gray-500 gap-2">
                        <Image src={admin} alt="" width={25} />
                        <h6>14 Oct 2022</h6>
                    </div>
                    <div className="flex text-gray-500 gap-2">
                        <Image src={tag} alt="" width={25} />
                        <h6>Wood</h6>
                    </div>
                </div>
                <div className='px-4 md:px-16 lg:px-56'>
                    <p className="text-lg mt-10 ">
                        In recent years, the term “Millennial Design” has become a buzzword in the world of interior decor and architecture. But what exactly does it mean, and why is it capturing the imagination of designers and homeowners alike? Millennial design is more than just an aesthetic; it’s a lifestyle, a reflection of the values and preferences of a generation that prioritizes individuality, sustainability, and functionality.
                    </p>
                    <h3 className='text-3xl md:text-4xl font-bold mt-8'>What Defines Millennial Design?</h3>
                    <p className='mt-5'>At its core, millennial design is characterized by a blend of modern minimalism, bold creativity, and practicality. Here are some key elements that define this trend:</p>
                    <h5 className='text-xl md:text-2xl font-bold mt-5'>1-Neutral Color Palettes with Pops of Color</h5>
                    <p className='mt-5'>Millennials love calm, neutral tones like whites, grays, and beiges, which create a serene base for any space. These palettes are often accented with bold pops of color through decor items like cushions, rugs, or artwork, bringing energy and personality to the design.</p>
                    <h5  className='text-xl md:text-2xl font-bold mt-5'>2-Multifunctional Spaces</h5>
                    <p className='mt-5'>With the rise of remote work and smaller living spaces, millennials prioritize versatility. Furniture that serves multiple purposes—like a sofa bed or a coffee table with hidden storage—is a staple of millennial design.</p>
                    <h5 className='text-xl md:text-2xl font-bold mt-5'>3-Sustainability and Eco-Friendliness</h5>
                    <p className='mt-5'>Sustainability is at the heart of millennial values, and it shows in their design choices. Reclaimed wood, recycled materials, and energy-efficient lighting are commonly used to create beautiful yet environmentally responsible designs.</p>
                    <h5 className='text-xl md:text-2xl font-bold mt-5'>4-Tech Integration</h5>
                    <p className='mt-5'>Millennials embrace smart technology to enhance their living experience. From voice-controlled lighting to smart thermostats, tech seamlessly integrates with millennial design without compromising aesthetics.</p>
                    <h5 className='text-xl md:text-2xl font-bold mt-5'>5-Handmade and Artisan Pieces</h5>
                    <p className='mt-4'>Personalization and uniqueness are essential. Handmade pottery, custom wall art, and artisanal furniture pieces add warmth and a sense of identity to the home.</p>
                    <h3 className='text-2xl md:text-3xl font-bold mt-8'>Why Is Millennial Design So Popular?</h3>
                    <p className='mt-5'>Millennial design resonates with a generation that values experiences over possessions. It prioritizes comfort and functionality while still allowing room for creative expression. This balance between practicality and artistry makes millennial design highly adaptable, appealing to a wide range of tastes and lifestyles.</p>
                    <h5 className='text-2xl md:text-3xl font-bold mt-8'>The Future of Millennial Design</h5>
                    <p className='mt-5'>As the millennial generation continues to evolve, so will its design preferences. The focus on sustainability, technology, and individuality is expected to grow even stronger. This evolution ensures that millennial design will remain relevant, inspiring, and adaptable for years to come.</p>
                    <p className='mt-5'>Whether you’re redesigning your entire home or just updating a single room, going all-in with millennial design is about creating a space that reflects who you are while embracing the needs of modern living. It’s not just a style—it’s a statement.</p>
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
    )
}

export default blog1;
