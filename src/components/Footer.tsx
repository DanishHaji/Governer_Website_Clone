import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 text-black p-8 gap-8 md:gap-20 lg:gap-52">
      <div className="courses">
        <h1 className="text-2xl font-bold mb-4">Core Courses</h1>
        <ul className="space-y-2">
          <li><a href="#programming" className="text-gray-900 hover:text-yellow-700">Programming Fundamentals</a></li>
          <li><a href="#web2" className="text-gray-900 hover:text-yellow-700">Web2 Using NextJS</a></li>
          <li><a href="#earn" className="text-gray-900 hover:text-yellow-700">Earn as You Learn</a></li>
        </ul>
      </div>
      <div className="advance-courses">
        <h1 className="text-2xl font-bold mb-4">Advanced Courses</h1>
        <ul className="space-y-2">
          <li><a href="#web3" className="text-gray-900 hover:text-yellow-700">Web 3 and Metaverse</a></li>
          <li><a href="#cloud" className="text-gray-900 hover:text-yellow-700">Cloud-Native Computing</a></li>
          <li><a href="#ai" className="text-gray-900 hover:text-yellow-700">Artificial Intelligence (AI) and Deep Learning</a></li>
          <li><a href="#iot" className="text-gray-900 hover:text-yellow-700">Ambient Computing and IoT</a></li>
          <li><a href="#genomics" className="text-gray-900 hover:text-yellow-700">Genomics and Bioinformatics</a></li>
          <li><a href="#network" className="text-gray-900 hover:text-yellow-700">Network Programmability and Automation</a></li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4">Social Links</h1>
        <ul className="flex justify-center md:justify-start text-3xl space-x-6 mb-4">
          <li><FaFacebook className="text-blue-700 hover:text-blue-400" /></li>
          <li><FaYoutube className="text-red-700 hover:text-red-400" /></li>
          <li><FaTwitter className="text-blue-400 hover:text-blue-600" /></li>
          <li><FaInstagram className="text-pink-700 hover:text-pink-400" /></li>
          <li><FaTiktok className="text-black hover:text-sky-500" /></li>
        </ul>
        <a href="mailto:education@governorsindh.com" className="flex items-center justify-center md:justify-start hover:text-yellow-700">
        <FaEnvelope className="mr-2 text-3xl" />
        education@governorsindh.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
