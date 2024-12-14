"use client"

import React from "react";
import Header from "../Components/Header";
import Link from "next/link";
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import shop4 from "../assets/shop4.png";
import shop5 from "../assets/shop5.png";
import shop6 from "../assets/shop6.png";
import shop7 from "../assets/shop7.png";
import shop8 from "../assets/shop8.png";
import shop9 from "../assets/shop9.png";
import shop10 from "../assets/shop10.png";
import shop11 from "../assets/shop11.png";
import shop12 from "../assets/shop12.png";
import shop13 from "../assets/shop13.png";
import shop14 from "../assets/shop14.png";
import shop15 from "../assets/shop15.png";
import shop16 from "../assets/shop16.png";
import Image from "next/image";
import contactbanner from "../assets/contact.jpeg";
import rightbutton from "../assets/right-button.png";
import contactlogo from "../assets/contactlogo.png";
import Footer from "../Components/Footer";

const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: shop1 },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: shop2 },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: shop3 },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: shop4 },
    { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", image: shop5 },
    { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", image: shop6 },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: shop7 },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: shop8 },
    { id: 9, name: "Plain console_", price: "Rs. 258,200.00", image: shop9 },
    { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: shop10 },
    { id: 11, name: "SJP_0825 ", price: "Rs. 200,000.00", image: shop11 },
    { id: 12, name: "Bella chair and table", price: "Rs. 100,000.00", image: shop12 },
    { id: 13, name: "Granite square side table", price: "Rs. 258,800.00", image: shop13 },
    { id: 14, name: "Asgaard sofa", price: "Rs. 250,000.00", image: shop14 },
    { id: 15, name: "Maya sofa three seater", price: "Rs. 115,000.00", image: shop15 },
    { id: 16, name: "Outdoor sofa set", price: "Rs. 244,000.00", image: shop16 },
];

const ProductSection = () => {
    return (
        <div>
            <Header cartItems={[]} toggleCart={function (): void { throw new Error("Function not implemented."); }} />
            <div className="relative">
                <Image src={contactbanner} alt="Banner" className="object-cover w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center  bg-white bg-opacity-30">
                    <div className="flex justify-center items-center mb-4">
                        <Image src={contactlogo} alt="Contact Logo" width={100} />
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Shop</h2>
                    <div className="gap-3 flex items-center justify-center">
                        <a href="/" className="hover:text-black">Home</a>
                        <Image src={rightbutton} alt="" width={20} />
                        <a href="/Shop" className="hover:text-black">Shop</a>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div>
                    <div className="flex flex-wrap justify-between items-center mb-8 bg-red-50 w-full h-20 px-6 sm:px-16 lg:px-20">
                        <h2 className="text-xl sm:text-2xl font-bold">Showing 1–4 of 40 results</h2>
                        <div className="flex items-center gap-4">
                            <button className="text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Filter</button>
                            <div className="text-sm">
                                <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
                                <select id="sort" className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring">
                                    <option value="default">Default</option>
                                    <option value="priceLowHigh">Price: Low to High</option>
                                    <option value="priceHighLow">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-16 lg:px-20 mt-24">
                        {products.map((product) => (
                            <div key={product.id} className="rounded-lg p-4 bg-white shadow-md">
                                <Link href={`/Shop/${product.id}`}>
                                    <div>
                                        <img src={product.image.src} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                                        <h3 className="text-lg font-semibold text-gray-500 mt-6">{product.name}</h3>
                                        <p className="text-primary-500 text-lg font-bold mt-2">{product.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-20">
                        <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">1</button>
                        <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">2</button>
                        <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">3</button>
                        <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">Next</button>
                    </div>
                </div>
            </section>

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

export default ProductSection;
