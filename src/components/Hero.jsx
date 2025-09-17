import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom'; // 1. Import the Link component

const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center lg:items-center
      justify-evenly lg:justify-between min-h-[calc(90vh-6rem)]
      bg-black text-white px-6 lg:px-16">

      {/* Text / Left (on lg) */}
      <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left z-10
        lg:py-0 lg:ml-[5%]">

        {/* Gradient pill */}
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.12)]">
          <div className="flex items-center justify-center gap-2 bg-black rounded-full w-[200px] h-10">
            <i className="bx bx-diamond-alt text-white"></i>
            <span className="text-white font-semibold">Web Development</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider my-8 leading-tight">
          Your Vision,<br /> Our Expertise
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400
          max-w-[25rem] lg:max-w-[30rem] mx-auto lg:mx-0">
          You bring the big ideas, and we'll handle the code. Our passion is translating your goals into a polished, professional website that not only looks stunning but also delivers results for your business.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-7 justify-center lg:justify-start">
          
          {/* 2. Change the <a> tag to a <Link> tag pointing to the contact page */}
          <Link to="/contact" className="flex items-center gap-2 border border-[#2a2a2a]
            py-2 sm:py-3 px-4 sm:px-5 rounded-full
            sm:text-lg text-sm font-semibold tracking-wider
            transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white">
            Let's Talk <i className="bx bx-link"></i>
          </Link>
          
        </div>
      </div>

      {/* Robot / Right (on lg) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:mt-0">
        <div className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[560px]
                       h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px]
                       lg:-mt-12">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/LeTnVlby64gmKdN2/scene.splinecode"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;