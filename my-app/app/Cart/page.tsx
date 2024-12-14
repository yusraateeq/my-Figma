'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/app/Components/Header';
import Footer from "@/app/Components/Footer";
import Image from 'next/image';
import Link from "next/link";
import contactbanner from "../assets/contact.jpeg";
import contactlogo from "../assets/contactlogo.png";
import rightbutton from "../assets/right-button.png";
import del from "../assets/delete.png";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeItemFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Header cartItems={cart} toggleCart={() => {}} />
      <div className="relative">
        <Image
          src={contactbanner}
          alt="Banner"
          className="object-cover w-full h-[300px] md:h-[400px] opacity-45"
        />
        <div className="absolute inset-0 text-center pt-20 md:pt-28">
          <div className="flex justify-center items-center">
            <Image src={contactlogo} alt="" width={80} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Cart</h2>
          <div className="gap-3 flex items-center justify-center">
            <a href="/" className="hover:text-black">Home</a>
            <Image src={rightbutton} alt="" width={20} />
            <a href="/Cart" className="hover:text-black">Cart</a>
          </div>
        </div>
      </div>

      <div className="cart-page pt-16 md:pt-28 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Side: Cart Items */}
          <div className="cart-items w-full lg:w-2/3">
            <div className="hidden md:flex justify-center gap-6 md:gap-28 py-2 rounded-md text-lg font-semibold mb-4 bg-red-50">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {cart.length === 0 ? (
              <div className="mt-10 text-center">
                <p>Your cart is empty. Add some products to the cart.</p>
                <Link href="/Shop" passHref>
                  <button className="mt-4 border-2 border-black px-6 py-2 rounded-xl hover:bg-yellow-100">Go to Shop</button>
                </Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item flex flex-col md:flex-row justify-between items-center py-6 border-b gap-4">
                    {/* Product Image and Details */}
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg bg-yellow-100" />
                      <div className="flex flex-col md:flex-row md:gap-6">
                        <h2 className="text-lg w-full md:w-52">{item.name}</h2>
                        <p className="text-gray-600">{item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}
                        className="px-2 py-1 border-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border-2 rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center gap-4">
                      <span>Rs. {parseFloat(item.price.replace(/[^\d.-]/g, "")) * item.quantity}</span>
                    </div>

                    {/* Remove Button */}
                    <div>
                      <button onClick={() => removeItemFromCart(item.id)} className="px-4 py-1">
                        <Image src={del} alt="Delete" width={30} height={30} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Cart Totals */}
          <div className="cart-totals w-full lg:w-1/3 pl-0 lg:pl-8">
            <div className="border p-6 md:p-8 rounded-lg bg-red-50">
              <h3 className="text-xl md:text-3xl font-bold mb-8 text-center">Cart Totals</h3>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="text-gray-500">Rs. {calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Total</span>
                <span className="text-amber-600">Rs. {calculateSubtotal()}</span>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href="/Checkout">
                  <button className="w-full border-2 border-black px-4 py-2 md:px-8 md:py-3 rounded-xl hover:bg-yellow-100">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-10 bg-red-50 py-10 md:py-20 px-6 md:px-28 mt-20">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Free Delivery</h2>
            <p>For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">90 Days Return</h2>
            <p>If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Secure Payment</h2>
            <p>100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
