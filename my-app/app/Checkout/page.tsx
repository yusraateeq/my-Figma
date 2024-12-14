'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/app/Components/Header';
import Footer from "@/app/Components/Footer";
import Image from 'next/image';
import Link from "next/link";
import contactbanner from "../assets/contact.jpeg";
import rightbutton from "../assets/right-button.png";
import contactlogo from "../assets/contactlogo.png";

const CheckoutPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve cart from localStorage on page load
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Header cartItems={cart} toggleCart={function (): void {
        throw new Error('Function not implemented.');
      }} />

      <div className="relative">
        <Image src={contactbanner} alt="Banner" className="object-cover w-full h-80 sm:h-[300px] md:h-[400px] lg:h-[500px]" />
        <div className="absolute inset-0 flex flex-col justify-center items-center  bg-white bg-opacity-30">
          <div className="flex justify-center items-center mb-4">
            <Image src={contactlogo} alt="Contact Logo" width={100} />
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">Checkout</h2>
          <div className="gap-3 flex items-center justify-center">
            <a href="/" className="hover:text-black">Home</a>
            <Image src={rightbutton} alt="" width={20} />
            <a href="/Checkout" className="hover:text-black">Checkout</a>
          </div>
        </div>
      </div>

      <div className="checkout-page pt-28 px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Billing Details */}
          <div className="bg-white p-8 border  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <form className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2  font-bold">First Name</label>
                  <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
                </div>
                <div>
                  <label className="block mb-2 font-bold">Last Name</label>
                  <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Company Name (Optional)</label>
                <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Country / Region</label>
                <select className="border border-gray-300 py-5 px-3 rounded-lg w-full text-gray-500 text-sm">
                  <option value="">Select Country</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Street Address</label>
                <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Town / City</label>
                <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Province</label>
                <select className="border py-5 rounded-lg border-gray-300 w-full text-gray-500 text-sm px-3">
                  <option value="" className=''>Select Province</option>
                  <option value="Western Province" className=''>Western Province</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">ZIP Code</label>
                <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Phone</label>
                <input type="text" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4">Email Address</label>
                <input type="email" className="border border-gray-300 py-5 rounded-lg w-full" />
              </div>
              <div>
                <label className="block mb-2 font-bold pt-4"></label>
                <input type="text" placeholder='Additional information' className="border px-3 border-gray-300 py-5 rounded-lg w-full" />
              </div>
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-white p-8 border rounded-lg shadow-md">
            <div className='flex items-center justify-between'>
              <h2 className="md:text-2xl font-semibold mb-6">Product</h2>
              <h2 className="md:text-2xl font-semibold mb-6">Subtotal</h2>
            </div>
            {cart.length === 0 ? (
              <div className="text-center">
                <p>Your cart is empty. Add some products to the cart.</p>
                <Link href="/Shop" passHref>
                  <button className="mt-4 border-2 border-black px-6 py-2 rounded-xl hover:bg-yellow-100">
                    Go to Shop
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center  pb-4">
                      <div>
                        <h3 className="md:text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold ">Rs. {parseFloat(item.price.replace(/[^\d.-]/g, "")) * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Subtotal:</span>
                    <span>Rs. {calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total:</span>
                    <span className="text-yellow-600 text-xl">Rs. {calculateSubtotal()}</span>
                  </div>
                  <div className='border-b-2 mt-5'></div>
                </div>

                <div className="mt-8">
                  <div className="space-y-2">
                    <div>
                      <input type="radio" id="bank" name="payment" className="mr-2" />
                      <label htmlFor="bank" className='text-black font-bold'>Direct Bank Transfer</label>
                    </div>
                    <p className='text-gray-400 text-lg py-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div>
                      <input type="radio" id="bank" name="payment" className="mr-2 " />
                      <label htmlFor="bank" className='text-gray-500 font-bold'>Direct Bank Transfer</label>
                    </div>
                    <div>
                      <input type="radio" id="cod" name="payment" className="mr-2 text-gray-500" />
                      <label htmlFor="cod" className='text-gray-500 font-bold'>Cash on Delivery</label>
                    </div>
                    <p className='text-lg py-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-bold'> privacy policy</span>.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className=" border-2 border-black rounded-xl text-sm px-16 py-3 hover:bg-yellow-100 transition-all">
                    Place Order
                  </button>
                </div>
              </div>
            )}
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

export default CheckoutPage;
