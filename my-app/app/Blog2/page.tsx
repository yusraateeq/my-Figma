"use client"

import React from 'react'
import Image from 'next/image'
import image1 from "../assets/blog1.jpeg";
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-center">Exploring new ways of decorating</h2>
                <div className='flex items-center justify-center'>
                    <Image src={image1} alt='' width={900} height={600} className='mt-10 w-full sm:w-3/4 md:w-1/2' />
                </div>
                <div className="flex items-center gap-6 mt-6 justify-center text-sm sm:text-base">
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
                <div className='px-4 sm:px-10 md:px-56'>
                    <p className="text-lg mt-10 ">
                        Decorating your home is an exciting journey that combines creativity, personal taste, and an ever-evolving understanding of design trends. In recent years, the way we approach home decor has shifted significantly, with an increasing desire to merge style, comfort, and practicality. Let’s explore some innovative ways to decorate that break the traditional mold and make your home truly unique.
                    </p>
                    <h5 className='text-2xl font-bold mt-5'>1-Sustainable Decorating: Green and Beautiful</h5>
                    <p className='mt-5'>One of the most significant trends in modern decorating is the emphasis on sustainability. Homeowners are more mindful of the environmental impact of their choices and are embracing eco-friendly materials. From reclaimed wood furniture to organic cotton fabrics and biodegradable wallpaper, sustainability is no longer just a trend—it’s a way of life. You can even incorporate repurposed materials like old wooden crates or pallets to create unique shelving or storage solutions, giving your home a rustic yet modern charm.</p>
                    <h5 className='text-2xl font-bold mt-5'>2-Incorporating Technology into Your Decor</h5>
                    <p className='mt-5'>Technology is transforming the way we design and decorate our homes. Smart home devices are now seamlessly integrated into interior design, from voice-controlled lighting systems to smart thermostats that adjust to your comfort needs. But it doesn’t end there—decorative tech pieces, such as sleek speakers and modern-looking chargers, are becoming design elements in their own right. Whether you use LED strips for ambient lighting or a smart mirror to track your health and fitness, technology offers endless possibilities to enhance your home’s functionality and style.</p>
                    <h5 className='text-2xl font-bold mt-5'>3- Artful Walls: Beyond Traditional Art</h5>
                    <p className='mt-5'>Gone are the days when walls were only decorated with traditional framed paintings. Today, decorating your walls can be a form of art in itself. Think large-scale murals, bold wallpaper with geometric designs, or even a DIY wall collage using photographs, vintage posters, or your own artwork. Wall decals, tapestry hangings, and three-dimensional wall sculptures are also gaining popularity as innovative ways to add texture and interest to your space.</p>
                    <h5 className='text-2xl font-bold mt-5'>4- Mixing Old and New</h5>
                    <p className='mt-5'>One of the most exciting ways to decorate is by blending vintage and contemporary pieces. Combining old furniture with modern design elements allows you to create a space full of character and charm. For instance, pairing a mid-century modern chair with a contemporary sofa creates an eclectic vibe that feels personal and lived-in. The key is to find a balance that doesn’t overwhelm the space but instead highlights the beauty in both styles.</p>
                    <h5 className='text-2xl font-bold mt-5'>5-Biophilic Design: Bringing Nature Inside</h5>
                    <p className='mt-4'>Biophilic design emphasizes the connection between indoor spaces and nature. With more people spending time at home, the demand for nature-inspired interiors is increasing. Incorporating plants, natural light, and materials like stone, wood, and bamboo can transform your home into a calming sanctuary. Indoor gardens, living walls, and even small herb gardens on windowsills can improve both the aesthetic and health benefits of your space. Biophilic design also extends to natural textures and earthy tones, creating a peaceful and grounded atmosphere.</p>

                    <h5 className='text-3xl font-bold mt-8'>6-Color and Texture Play</h5>
                    <p className='mt-5'>Gone are the days of neutral-only interiors. Modern decorating embraces the freedom to play with bold colors and textures. Accent walls in vibrant colors like deep blue or mustard yellow can add personality to a room, while patterned textiles—like a velvet throw or an embroidered pillow—can bring depth and richness. Mixing contrasting materials such as glass, wood, and metal also helps create a dynamic, layered effect that makes your decor feel more interesting and tactile.</p>

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
