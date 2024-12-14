import Image from "next/image";
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';
import time from '../assets/time.png';
import date from '../assets/date.png';
import Link from "next/link";

const BlogSection = () => {

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-4">Our Blogs</h2>
        <p className="text-center text-gray-600 mb-10">
          Find a bright idea to suit your taste with our great selection
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Blog Post 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Image src={blog1} alt="Blog 1" width={400} height={250} className="rounded-lg w-full h-auto" />
            <p className="text-lg mt-6">Going all-in with millennial design</p>
            <Link href="/Blog1"><button className="text-primary-500 font-semibold border-b-2 border-black mt-4">
              Read More
            </button></Link>
            <div className="flex items-center gap-4 mt-5 justify-center">
              <div className="flex items-center gap-1">
                <Image src={time} alt="Time" width={20} height={20} />
                <h6 className="text-sm">5 min</h6>
              </div>
              <div className="flex items-center gap-1">
                <Image src={date} alt="Date" width={20} height={20} />
                <h6 className="text-sm">12th Oct 2022</h6>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Image src={blog2} alt="Blog 2" width={400} height={250} className="rounded-lg w-full h-auto" />
            <p className="text-lg mt-6">Going all-in with millennial design</p>
            <Link href="/Blog2"><button className="text-primary-500 font-semibold border-b-2 border-black mt-4">
              Read More
            </button></Link>
            <div className="flex items-center gap-4 mt-5 justify-center">
              <div className="flex items-center gap-1">
                <Image src={time} alt="Time" width={20} height={20} />
                <h6 className="text-sm">5 min</h6>
              </div>
              <div className="flex items-center gap-1">
                <Image src={date} alt="Date" width={20} height={20} />
                <h6 className="text-sm">12th Oct 2022</h6>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <Image src={blog3} alt="Blog 3" width={400} height={250} className="rounded-lg w-full h-auto" />
            <p className="text-lg mt-6">Going all-in with millennial design</p>
            <Link href="/Blog3"><button className="text-primary-500 font-semibold border-b-2 border-black mt-4">
              Read More
            </button></Link>
            <div className="flex items-center gap-4 mt-5 justify-center">
              <div className="flex items-center gap-1">
                <Image src={time} alt="Time" width={20} height={20} />
                <h6 className="text-sm">5 min</h6>
              </div>
              <div className="flex items-center gap-1">
                <Image src={date} alt="Date" width={20} height={20} />
                <h6 className="text-sm">12th Oct 2022</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="text-primary-500 font-semibold border-b-2 border-black">
            View All Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
