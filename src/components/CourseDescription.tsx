'use client';

import Image from "next/image";
import courseImage1 from "../../public/d1.jpg";
import courseImage2 from "../../public/d2.jpg";
import courseImage3 from "../../public/d3.jpg";

const CourseDescription = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center px-2 lg:px-2">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-sky-800 mb-6">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h2>

        {/* Paragraph */}
        <p className="text-lg lg:text-xl text-gray-700 mb-10 text-justify">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>

        {/* Grid of Pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Picture 1 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-gray-800">
            <Image
              src={courseImage1}
              alt="Course 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Picture 2 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-gray-800">
            <Image
              src={courseImage2}
              alt="Course 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Picture 3 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-gray-800">
            <Image
              src={courseImage3}
              alt="Course 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
