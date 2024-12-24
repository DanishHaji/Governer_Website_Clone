import React from 'react';
import Image from 'next/image';
import kamran from '../../public/kamran.png';
import background from '../../public/background.jpg';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Hero Text Content */}
      <div className="relative flex flex-col justify-center items-center text-center lg:items-start lg:text-left w-full lg:w-2/4 mb-20 mt-20 px-4 lg:px-0 lg:ml-8 lg:mr-8 z-10">
        <h1 className="text-5xl lg:text-7xl font-black text-sky-800">Governor Sindh</h1>
        <h2 className="text-3xl lg:text-5xl text-sky-800 mt-3 mb-4">Kamran Khan Tessori</h2>
        <h2 className="text-3xl lg:text-5xl font-black text-sky-400 mt-3">Certified Cloud</h2>
        <h2 className="text-3xl lg:text-5xl font-black text-sky-400">Applied Generative AI</h2>
        <h2 className="text-3xl lg:text-5xl font-black text-sky-400">Engineer (GenEng)</h2>
        <p className="font-black text-lg lg:text-2xl text-sky-800 mt-4">Earn up to $5,000 / month</p>
        <p className="font-black text-lg lg:text-2xl text-sky-800 mt-2">
          Now admissions are open in
          <span>
            <br />
            Hyderabad
          </span>
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:items-center mt-8">
          <button className="font-black text-lg lg:text-xl text-white p-3 px-10 bg-sky-800 rounded mb-4 lg:mb-0 lg:mr-8">
            Apply Now
          </button>
          <p className="font-black text-xl lg:text-3xl text-sky-800 justify-center items-center text-center">
            562,143
            <span className="text-sm text-sky-700 mr-1">
              <br />
              Accepted Applications
            </span>
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative flex justify-center items-center mt-10 w-full lg:w-auto z-10">
        <Image
          src={kamran}
          alt="cover picture"
          layout="responsive"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
