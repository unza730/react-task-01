import React, { useState } from 'react';
import './index.css'
const PriceRange = ({ minPrice, maxPrice, handlePriceInput, handleRangeInput }) => {
  const calculateRangePosition = () => {
    return {
      left: ((minPrice / 1000) * 100) + '%',
      right: 100 - ((maxPrice / 1000) * 100) + '%',
    };
  };

  return (
    <div className="wrapper">
      <p className="text-zinc-800 my-5 text-base font-semibold font-Poppins">Price range</p>

      <div className="slider">
        <div className="progress" style={calculateRangePosition()}></div>
      </div>

      <div className="range-input relative">
        <input
          type="range"
          name="min"
          min="0"
          max="1000"
          value={minPrice}
          step="100"
          onChange={handleRangeInput}
          className="w-full h-5 -top-5 appearance-none bg-none pointer-events-none"
        />
        <input
          type="range"
          name="max"
          min="0"
          max="1000"
          value={maxPrice}
          step="100"
          onChange={handleRangeInput}
          className="w-full h-5 -top-5 appearance-none bg-none pointer-events-none"
        />
      </div>

      <div className="grid gap-6 mb-6 grid-cols-1  xl:grid-cols-2 my-9">
        <div className="">
          <label htmlFor="min_price" className="text-zinc-800 text-xs font-medium font-Poppins block mb-2 dark:text-white">
            Min Price
          </label>
          <input
            id="min_price"
            type="number"
            name="min"
            value={minPrice}
            onChange={handlePriceInput}
            className="w-[115px] h-[31px] rounded-2xl border border-stone-300 p-4 text-zinc-800 text-xs font-normal font-Poppins"
            placeholder="John"
            required
          />
        </div>
        <div className="">
          <label htmlFor="max_price" className="text-zinc-800 text-xs font-medium font-Poppins block mb-2 dark:text-white">
            Max Price
          </label>
          <input
            id="max_price"
            type="number"
            name="max"
            value={maxPrice}
            onChange={handlePriceInput}
            className="w-[115px] h-[31px] rounded-2xl border border-stone-300 p-4 text-zinc-800 text-xs font-normal font-Poppins"
            placeholder="Doe"
            required
          />
        </div>
      </div>
    </div>
    // 

  );
};

export default PriceRange;