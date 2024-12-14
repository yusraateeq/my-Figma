"use client";
import React from "react";
import Image from "next/image";
import contactbanner from "../assets/contact.jpeg";
import Header from "../Components/Header";
import rightbutton from "../assets/right-button.png";
import contactlogo from "../assets/contactlogo.png";
import blog1 from "../assets/blog2.jpeg";
import blog2 from "../assets/blog1.jpeg";
import blog3 from "../assets/blog3.jpeg";
import admin from "../assets/admin.png";
import date from "../assets/day.png";
import tag from "../assets/tag.png";
import Link from "next/link";
import Footer from "../Components/Footer";

const page = () => {
    return (
        <div>
            <Header
                cartItems={[]}
                toggleCart={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <div className="relative">
                <Image src={contactbanner} alt="Banner" className="object-cover w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center  bg-white bg-opacity-30">
                    <div className="flex justify-center items-center mb-4">
                        <Image src={contactlogo} alt="Contact Logo" width={100} />
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Blog</h2>
                    <div className="gap-3 flex items-center justify-center">
                        <a href="/" className="hover:text-black">Home</a>
                        <Image src={rightbutton} alt="" width={20} />
                        <a href="/Blog" className="hover:text-black">Blog</a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start gap-8 justify-between px-4 sm:px-20 py-20">
                {/* Blog Section */}
                <div className="w-full lg:w-2/4">
                    {/* Blog 1 */}
                    <div>
                        <Image
                            src={blog1}
                            alt=""
                            width={650}
                            className="rounded-lg h-96 object-cover w-full"
                        />
                        <div className="flex items-center gap-6 mt-6">
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
                        <h2 className="text-2xl sm:text-3xl font-bold mt-6">
                            Going all-in with millennial design
                        </h2>
                        <p className="text-gray-500 mt-4">
                            In recent years, the term “Millennial Design” has become a
                            buzzword in the world of interior decor and architecture. But what
                            exactly does it mean, and why is it capturing the imagination of
                            designers and homeowners alike? Millennial design is more than just
                            an aesthetic; it’s a lifestyle, a reflection of the values and
                            preferences of a generation that prioritizes individuality,
                            sustainability, and functionality.
                        </p>
                        <Link href="/Blog1">
                            <button className="border-b-2 border-gray-600 mt-4">
                                Read more
                            </button>
                        </Link>
                    </div>

                    {/* Blog 2 */}
                    <div className="mt-16">
                        <Image
                            src={blog2}
                            alt=""
                            width={650}
                            className="rounded-lg h-96 object-cover w-full"
                        />
                        <div className="flex items-center gap-6 mt-6">
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
                        <h2 className="text-2xl sm:text-3xl font-bold mt-6">
                            Exploring new ways of decorating
                        </h2>
                        <p className="text-gray-500 mt-4">
                            Decorating your home is an exciting journey that combines
                            creativity, personal taste, and an ever-evolving understanding of
                            design trends. In recent years, the way we approach home decor has
                            shifted significantly, with an increasing desire to merge style,
                            comfort, and practicality. Let’s explore some innovative ways to
                            decorate that break the traditional mold and make your home truly
                            unique.
                        </p>
                        <Link href="/Blog2">
                            <button className="border-b-2 border-gray-600 mt-4">
                                Read more
                            </button>
                        </Link>
                    </div>

                    {/* Blog 3 */}
                    <div className="mt-16">
                        <Image
                            src={blog3}
                            alt=""
                            width={650}
                            className="rounded-lg h-96 object-cover w-full"
                        />
                        <div className="flex items-center gap-6 mt-6">
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
                        <h2 className="text-2xl sm:text-3xl font-bold mt-6">
                            Handmade pieces that took time to make
                        </h2>
                        <p className="text-gray-500 mt-4">
                            In a world where mass production often takes center stage, handmade
                            pieces stand out for their unique charm and the time, care, and
                            skill involved in their creation. These pieces aren't just products;
                            they represent a story, an experience, and the passion of the
                            artisans behind them. From intricate designs to the feel of the
                            materials used, handmade items are often far more than just
                            functional—they are works of art, crafted with dedication and love.
                        </p>
                        <Link href="/Blog3">
                            <button className="border-b-2 border-gray-600 mt-4">
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6">Categories</h3>
                        <ul className="text-lg space-y-4">
                            <li className="flex justify-between">
                                <span>Crafts</span> <span>2</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Design</span> <span>8</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Handmade</span> <span>7</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Interior</span> <span>1</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Wood</span> <span>6</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-6">Recent Posts</h3>
                        <ul className="space-y-10">
                            <li className="flex items-center gap-5 ">
                                <Image
                                    src={blog1}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg mt-2 ">
                                        Going all-in with millennial design
                                    </span>
                                    <Link href="/Blog1">
                                        <button className="border-b-2 border-gray-600 mt-1">
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-center gap-5 ">
                                <Image
                                    src={blog2}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg mt-2">
                                        Exploring new ways of decorating
                                    </span>
                                    <Link href="/Blog2">
                                        <button className="border-b-2 border-gray-600 mt-4">
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-center gap-5 ">
                                <Image
                                    src={blog3}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                />
                                <div>
                                    <span className="block text-lg mt-2">
                                        Handmade pieces that took time to make
                                    </span>
                                    <Link href="/Blog3">
                                        <button className="border-b-2 border-gray-600 mt-4">
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-6">
                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">
                    1
                </button>
                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">
                    2
                </button>
                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">
                    3
                </button>
                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 p-4 px-6 rounded-lg">
                    Next
                </button>
            </div>

            {/* Footer Section */}
            <div className='flex flex-wrap justify-between gap-6 bg-red-50 py-16 px-6 sm:px-16 lg:px-28 mt-20'>
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
                    <h2 className='text-xl sm:text-2xl font-bold mb-2'>Free Delivery</h2>
                    <p>For all orders over $50, consectetur adipim scing elit.</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
                    <h2 className='text-xl sm:text-2xl font-bold mb-2'>90 Days Return</h2>
                    <p>If goods have problems, consectetur adipim scing elit.</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
                    <h2 className='text-xl sm:text-2xl font-bold mb-2'>Secure Payment</h2>
                    <p>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default page;
