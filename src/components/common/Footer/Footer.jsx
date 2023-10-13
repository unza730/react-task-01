import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full md:h-416px bg-white border border-neutral-500">
      <div className="max-w-full mx-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8 md:mt-8 xl:ml-[149px]">
          <div className="text-gray-900 text-2xl font-semibold font-Poppins">Ez Rent</div>
          <a href="#" className="text-zinc-800 text-sm font-normal font-Poppins mt-4">
            Yorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Etiam eu turpis<br />consectetur adipiscing.
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8">
          <div className="text-zinc-800 text-lg font-semibold font-Poppins">Products</div>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            All Produts
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            All categories
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            Trending products
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            New arrivals
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8">
          <div className="text-zinc-800 text-lg font-semibold font-Poppins">Important links</div>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            About us
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            Contact us
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            Terms and Conditions
          </a>
          <a href="#" className="my-3 block text-zinc-800 text-sm font-normal font-Poppins">
            Privacy policy
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8">
          <div className="text-gray-900 text-2xl font-semibold font-Poppins"> Contact</div>
          <div className="text-zinc-800 text-sm font-normal font-Poppins mt-4 flex items-center">
            <FaRegEnvelope className="mr-2" />
            ezRent@gmail.com
          </div>
          <div className="text-zinc-800 text-sm font-normal font-Poppins flex items-center mt-2">
            <MdPhone className="mr-2" />
            123 - 456 - 789 - 0
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] bg-[#404EED] flex items-center justify-center">
        <div className="w-[179px]">
          <span className="text-white text-[15px] font-normal my-auto">Developed by</span>
          <span className="text-white text-[15px] font-semibold ml-[5px]">Mayonity</span>
        </div>
      </div>

      {/* <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
          <p className="mt-2">
            © Copyright 1998-year. All Rights Reserved.
          </p>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer