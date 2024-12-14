"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog3.jpeg";
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
            }} />
            <div className='pt-20 justify-center bg-gray-100 pb-20'>
                <h2 className="text-3xl sm:text-5xl font-bold mt-6 text-center">Handmade pieces that took time to make</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='' width={900} height={600} className='mt-10 w-full sm:w-[900px]' />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 justify-center">
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
                <div className='px-4 sm:px-28'>
                    <p className="text-lg mt-10">
                        In a world where mass production often takes center stage, handmade pieces stand out for their unique charm and the time, care, and skill involved in their creation. These pieces aren't just products; they represent a story, an experience, and the passion of the artisans behind them. From intricate designs to the feel of the materials used, handmade items are often far more than just functional—they are works of art, crafted with dedication and love.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>1-The Art of Crafting Handmade Pieces</h5>
                    <p className='mt-5'>
                        Handmade pieces are born from the hands of skilled artisans, each contributing their knowledge, technique, and individuality. Unlike factory-made items that are produced in large quantities, handmade pieces are the result of hours, sometimes even days, of work. The process involves thoughtful design, precision, and a steady hand. Whether it's pottery, jewelry, furniture, or clothing, the craftsperson's attention to detail brings out the beauty in each item.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>2-Time is the Key Ingredient</h5>
                    <p className='mt-5'>
                        What sets handmade items apart is not just the physical materials but also the time invested in their creation. It takes time to perfect every detail, to adjust designs, and to correct any imperfections that may arise. Each piece reflects its maker’s commitment, from the early stages of design to the final touches. Whether it’s weaving fabric, carving wood, or mixing the perfect shade of paint, time is the invisible thread that binds every handmade item together.
                    </p>
                    <p className='mt-5'>
                        In the hustle and bustle of today’s world, time is a luxury. So, when you purchase a handmade piece, you're not just buying a product; you're investing in the time and dedication of its creator. This makes handmade items not just valuable, but meaningful.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>3- The Uniqueness of Handmade Pieces</h5>
                    <p className='mt-5'>
                        One of the most alluring aspects of handmade pieces is their individuality. While mass-produced items often lack personality, handmade pieces carry the distinctive mark of their maker. No two items are exactly alike, even if they were created using the same materials and techniques. The slight imperfections, the small variations in design, and the maker’s signature style contribute to their uniqueness.
                    </p>
                    <p className='mt-5'>
                        These imperfections are often seen as part of the charm. They serve as a reminder that something made by hand isn’t a perfect replica, but rather a labor of love and attention. When you own a handmade piece, you're holding something truly unique—something that cannot be replicated by any machine.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>4- The Value Beyond the Price Tag</h5>
                    <p className='mt-5'>
                        Handmade pieces often come with a higher price tag, and rightfully so. The value of these items goes beyond just the cost of materials. It includes the time and expertise of the artisan, the care involved in creating each piece, and the uniqueness that cannot be mass-produced. These items have a certain authenticity and quality that is hard to find in mass-produced goods.
                    </p>
                    <p className='mt-5'>
                        Moreover, when you purchase handmade pieces, you're often supporting small businesses and local artisans. These creators rely on the sale of their works to sustain their livelihoods, making your purchase an act of support and empowerment.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>5-Handmade Pieces and Sustainability</h5>
                    <p className='mt-4'>
                        Another reason handmade items are highly valued today is their contribution to sustainability. Mass production often leads to waste, with many products being discarded or made from non-biodegradable materials. In contrast, handmade artisans tend to use locally sourced, natural materials and adopt sustainable practices. This makes handmade products not only special but also an eco-friendly choice.
                    </p>

                    <h5 className='text-4xl font-bold mt-8'>Conclusion: The Beauty of Handmade Craft</h5>
                    <p className='mt-5'>
                        In a world that increasingly values speed and convenience, handmade pieces serve as a beautiful reminder of the art of craftsmanship. These items reflect the dedication, patience, and creativity of their makers, making them far more than just objects—they are pieces of art that carry a piece of history with them. When you buy handmade, you’re not just purchasing a product; you’re investing in a story, a tradition, and an experience.
                    </p>
                    <p className='mt-5'>
                        So, the next time you’re considering what to buy, think beyond convenience and embrace the beauty of something that took time to make. You'll find that these handmade treasures bring more to your life than just aesthetic appeal—they bring meaning.
                    </p>
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

export default blog1
