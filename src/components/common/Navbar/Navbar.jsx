import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import {GoHeart} from 'react-icons/go';
 import  {BiMessageDetail} from 'react-icons/bi';
 import {TbUserSquareRounded} from 'react-icons/tb';
 import {RxCross1} from 'react-icons/rx';
 import './index.css'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check the window width on initial load
    const checkScreenWidth = () => {
      if (window.innerWidth >= 768) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add a resize event listener to check the window width on resize
    window.addEventListener('resize', checkScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   {/* <div className="flex w-[100%] h-[88px] md:left-0 md:top-[44px] bg-white border border-black"> */}
   <div className={`flex w-[100%] h-[88px] md:left-0 md:top-[44px] bg-white border border-black ${isScrolled ? 'scrolled' : ''}`}>
     <div className="md:hidden flex items-center">
      <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
        <svg className={`w-6 h-6 text-gray-500 hover:text-green-500 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg className={`w-6 h-6 text-gray-500 hover:text-green-500 ${isMobileMenuOpen ? '' : 'hidden'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div className='h-[90px] w-[120px] xl:w-[154px] md:h-[154px] ml-0 xl:ml-[94px]  '>
      <img className="h-[90px] md:h-auto md:top-[-33px] absolute" src={logo} />
    </div>
    <div className=" md:w-[100%] hidden md:flex md:ml-[184px] lg:ml-[262px]  md:gap-7 lg:gap-8 my-auto">
      <a href='#' className="text-zinc-800 text-base font-medium font-['Poppins'] py-4 px-2 text-[#313131] font-poppins text-[16px] font-medium leading-normal">Home</a>
      <a href='#' className="text-zinc-800 text-base font-medium font-['Poppins'] py-4 px-2 text-[#313131] font-poppins text-[16px] font-medium leading-normal">Services</a>
      <a href='#' className="text-zinc-800 text-base font-medium font-['Poppins'] py-4 px-2 text-[#313131] font-poppins text-[16px] font-medium leading-normal">About</a>
      <a href='#' className="text-zinc-800 text-base font-medium font-['Poppins'] py-4 px-2 text-[#313131] font-poppins text-[16px] font-medium leading-normal">Contact Us</a>
    </div>
    <div className="flex justify-end gap-7  md:gap-4 lg:gap-[38px] my-auto md:mr-[20px] lg:mr-[90px] absolute top-8 right-4 md:right-0">
      <GoHeart fontSize='23px' />
      <BiMessageDetail fontSize='23px' />
      <TbUserSquareRounded fontSize='23px' />
    </div>
  </div>
  
  {/* Mobile Menu */}
  <div className={`mobile-menu block md:hidden fixed top-0 right-0 z-50 w-full h-screen bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <button
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={toggleMobileMenu}
    >
      <RxCross1 />
      <span className="sr-only">Close menu</span>
    </button>

    <div className="w-[143px] mt-[10%] h-[64.25px] ml-[47px] text-gray-900 text-[40px] font-semibold font-['Poppins']">Ez Rent</div>
    <p className="w-[85%]  sm:w-full h-[38.55px] mx-[47px] text-zinc-800 text-xs font-normal font-['Poppins']">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis consectetur adipiscing.</p>
    <div className="w-[85%]  sm:w-[80%] h-[0px] mt-[29.6px] mx-[47px] border border-stone-300"></div>
    <ul className='mt-[3.3rem] ml-[47px]'>
    <li>
        <a href="services.html" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300">Home</a>
      </li>
      <li>
        <a href="services.html" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300">About Us</a>
      </li>
      <li>
        <a href="about.html" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300">Products </a>
      </li>
      <li>
        <a href="contact.html" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300">Contact Us</a>
      </li>
      <li>
        <a href="services.html" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition duration-300">Faq</a>
      </li>
    </ul>
    <div className="w-[346px] h-[0px] mt-[29.6px] ml-[47px] border border-stone-300"></div>
   
  </div>
  </>
)
}

export default Navbar;