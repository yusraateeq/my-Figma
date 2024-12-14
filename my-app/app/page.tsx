"use client"
import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Chair from "./Components/Chair";
import Product from "./Components/Product";
import Sofa from "./Components/Sofa";
import Blog from "./Components/Blog";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div>
    <Header cartItems={[]} toggleCart={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    <Hero/>
    <Chair/>
    <Product/>
    <Sofa/>
    <Blog/>
    <Banner/>
    <Footer/>

    
    
   </div>
  );
}
