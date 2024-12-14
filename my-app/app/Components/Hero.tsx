'use client';
import Image from 'next/image';
import chairImage from '../assets/sofa.png'; // Replace with your image path

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-yellow-100 pl-6 lg:pl-28 pt-24 pb-8 space-y-8 lg:space-y-0">
      {/* Text Section */}
      <div className="font-bold max-w-lg text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Rocket Single Seater
        </h1>
        <a
          href="/Shop"
          className="inline-block border-b-2 border-green-600 text-lg hover:text-black mt-4"
        >
          Shop Now
        </a>
      </div>

      {/* Image Section */}
      <div className="mt-10 lg:mt-0">
        <Image
          src={chairImage}
          alt="Rocket single seater chair"
          className="rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
