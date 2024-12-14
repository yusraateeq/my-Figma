'use client';
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/Components/Header';
import Link from "next/link";
import Footer from "@/app/Components/Footer";

// Import all product images
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";
import shop4 from "../../assets/shop4.png";
import shop5 from "../../assets/shop5.png";
import shop6 from "../../assets/shop6.png";
import shop7 from "../../assets/shop7.png";
import shop8 from "../../assets/shop8.png";
import shop9 from "../../assets/shop9.png";
import shop10 from "../../assets/shop10.png";
import shop11 from "../../assets/shop11.png";
import shop12 from "../../assets/shop12.png";
import shop13 from "../../assets/shop13.png";
import shop14 from "../../assets/shop14.png";
import shop15 from "../../assets/shop15.png";
import shop16 from "../../assets/shop16.png";
import facebook from '../../assets/facebook-logo-24.png';
import link from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import set1 from '../../assets/set1.png';
import del from "../../assets/delete.png";
import set2 from '../../assets/set2.png';
// (other image imports)

const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", description: "A comfortable and modular sofa perfect for any living room.", image: shop1, rating: 4, reviews: 120 },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", description: "A durable dining table set for family dinners.", image: shop2, rating: 5, reviews: 200 },
    { id: 3, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", description: "A durable dining table set for family dinners.", image: shop3, rating: 3, reviews: 50 },
    { id: 4, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", description: "A durable dining table set for family dinners.", image: shop4, rating: 4, reviews: 90 },
    { id: 5, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", description: "A durable dining table set for family dinners.", image: shop5, rating: 5, reviews: 150 },
    { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", image: shop6, rating: 4, reviews: 75 },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: shop7, rating: 3, reviews: 30 },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: shop8, rating: 4, reviews: 110 },
    { id: 9, name: "Plain console_", price: "Rs. 258,200.00", image: shop9, rating: 5, reviews: 180 },
    { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: shop10, rating: 4, reviews: 60 },
    { id: 11, name: "SJP_0825 ", price: "Rs. 200,000.00", image: shop11, rating: 3, reviews: 40 },
    { id: 12, name: "Bella chair and table", price: "Rs. 100,000.00", image: shop12, rating: 5, reviews: 250 },
    { id: 13, name: "Granite square side table", price: "Rs. 258,800.00", image: shop13, rating: 4, reviews: 85 },
    { id: 14, name: "Asgaard sofa", price: "Rs. 250,000.00", image: shop14, rating: 5, reviews: 300 },
    { id: 15, name: "Maya sofa three seater", price: "Rs. 115,000.00", image: shop15, rating: 4, reviews: 95 },
    { id: 16, name: "Outdoor sofa set", price: "Rs. 244,000.00", image: shop16, rating: 5, reviews: 150 },
    // (other products)
];

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
    const [cart, setCart] = useState<any[]>([]); // Initialize as an empty array
    const [isCartOpen, setIsCartOpen] = useState(false); // Sidebar visibility
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        params.then((resolved) => setResolvedParams(resolved));

        // Retrieve cart from localStorage on page load
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [params]);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle cart visibility
    };

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    const productId = Number(resolvedParams.id);
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return notFound();
    }

    // Add product to cart
    const addToCart = () => {
        const newProduct = { ...product, quantity };
        const updatedCart = [...cart, newProduct];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save cart to localStorage
        setIsCartOpen(true); // Open the cart sidebar immediately after adding to cart
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => {
            const price = String(item.price).replace(/[^\d.-]/g, ""); // Ensure item.price is a string
            return total + parseFloat(price) * item.quantity;
        }, 0);
    };


    const relatedProducts = products.filter((item) => item.id !== productId).slice(0, 4);

    const removeItemFromCart = (itemId: number) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <Header cartItems={cart} toggleCart={toggleCart} />

            {/* Product Details Section */}
            <div className="product-details pt-16">
               
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-28">
                    <div>
                        <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg bg-yellow-50" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-xl text-gray-700 mt-4">{product.price}</p>
                        <div className="flex items-center justify-center lg:justify-start mt-2">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`${index < product.rating ? "text-yellow-500" : "text-gray-300"} text-xl`}>★</span>
                            ))}
                            <p className="ml-2 text-gray-500">{product.reviews} reviews</p>
                        </div>
                        <p className="text-gray-600 mt-4">{product.description}</p>

                        {/* Size and Color Selection */}
                        <div className="mt-6">
                            <h3 className="font-semibold">Select Size:</h3>
                            <div className="flex space-x-4 mt-2 lg:justify-start justify-center ">
                                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 transition-all px-4 py-2 rounded">L</button>
                                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 transition-all px-4 py-2 rounded">XL</button>
                                <button className="bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100 transition-all px-4 py-2 rounded">XS</button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Select Color:</h3>
                            <div className="flex items-center lg:justify-start justify-center space-x-4 mt-2">
                                <button className="w-8 h-8 bg-purple-700 rounded-full"></button>
                                <button className="w-8 h-8 bg-black rounded-full"></button>
                                <button className="w-8 h-8 bg-amber-500 rounded-full"></button>
                            </div>
                        </div>

                        {/* Quantity Selection and Add to Cart */}
                        <div className="flex items-center gap-8 mt-6 justify-center lg:justify-start">
                            <div className="flex items-center space-x-4 border-2 rounded-xl py-3">
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 rounded">-</button>
                                <span className="text-xl">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-4 rounded">+</button>
                            </div>

                            <button onClick={addToCart} className="mt- border-2 border-black text-sm px-12 py-3 rounded-xl hover:bg-yellow-100">Add to Cart</button>
                        </div>
                    </div>
                </div>



                <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-end sm:mr-72 ">
                    <div>
                        <div className="flex items-center gap-4 font-bold text-gray-400 mb-4">
                            <h6>SKU</h6>
                            <h6>:</h6>
                            <h6>SS001</h6>
                        </div>
                        <div className="flex items-center gap-4 font-bold text-gray-400 mb-4">
                            <h6>Category</h6>
                            <h6>:</h6>
                            <h6>Sofas</h6>
                        </div>
                        <div className="flex items-center gap-4 font-bold text-gray-400 mb-4">
                            <h6>Tags</h6>
                            <h6>:</h6>
                            <h6>Sofa, Chair, Home, Shop</h6>
                        </div>
                        <div className="flex items-center gap-4 font-bold text-gray-400">
                            <h6>Share</h6>
                            <h6>:</h6>
                            <div className="flex items-center gap-4">
                                <Image src={facebook} alt="facebook" width={25} />
                                <Image src={link} alt="link" width={25} />
                                <Image src={twitter} alt="twitter" width={25} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="border-b-2 pt-20 "></div>




            <div className="mt-28">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-14 text-lg">
                    <h4>Description</h4>
                    <h4 className="text-gray-400">Additional Information</h4>
                    <h4 className="text-gray-400">Reviews [5]</h4>
                </div>
                <div className="mx-4 sm:mx-40 mt-8">
                    <p className="text-gray-400">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="text-gray-400 mt-6">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with well-balanced audio boasting a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className="lg:flex items-center justify-center gap-8 mt-16 sm:gap-16">
                    <Image src={set1} alt="" width={600} className="bg-red-50 h-[300px] rounded-lg sm:w-[600px]" />
                    <Image src={set2} alt="" width={600} className="bg-red-50 h-[300px] rounded-lg sm:w-[600px]" />
                </div>
                <div className="border-b-2 my-10"></div>
            </div>





            {/* Related Products */}
            <div className="mt-20 px-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((relatedProduct) => (
                        <Link key={relatedProduct.id} href={`/Shop/${relatedProduct.id}`} passHref>
                            <div className="border p-4 rounded">
                                <Image src={relatedProduct.image} alt={relatedProduct.name} width={200} height={200} className="rounded-lg" />
                                <h3 className="text-lg font-semibold mt-4">{relatedProduct.name}</h3>
                                <p className="text-gray-600">{relatedProduct.price}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className={`${index < relatedProduct.rating ? "text-yellow-500" : "text-gray-300"} text-xl`}>★</span>
                                    ))}
                                    <p className="ml-2 text-gray-500">{relatedProduct.reviews} reviews</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>



            {isCartOpen && (
                <div className="cart-sidebar fixed top-0 right-0 w-full sm:w-96 bg-white shadow-lg p-4 overflow-y-auto max-h-screen">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                        <button onClick={toggleCart}>✕</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="border-b-2 w-64 mt-8"></div>
                    </div>
                    <div>
                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="cart-item flex justify-start gap-8 items-center mb-4 mt-10">
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="bg-yellow-100 rounded-lg" />
                                    <div>
                                        <h3 className="text-sm">{item.name}</h3>
                                        <div className="flex items-center gap-4">
                                            <p>{item.quantity}</p>
                                            <p>x</p>
                                            <p className="text-yellow-500 text-sm">{item.price}</p>
                                            <div>
                                                <button onClick={() => removeItemFromCart(item.id)} className="px-4 py-1">
                                                    <Image src={del} alt="Delete" width={25} height={25} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-10 sm:mt-44">
                        <p>Subtotal: Rs. {calculateSubtotal().toLocaleString()}</p>
                        <p className="border-b-2 my-6"></p>
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Link href="/Cart">
                                <button className="border rounded-full py-1 px-6 border-gray-700 mb-4 sm:mb-0">View Cart</button>
                            </Link>
                            <button className="border rounded-full py-1 px-6 border-gray-700">Checkout</button>
                        </div>
                    </div>
                </div>
            )}



            <Footer />
        </div>
    );
};

export default ProductPage;











