import React, { useState } from 'react';

const SortingOption = ({ id, value, label, selectedCategory, onChange }) => (
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id={id}
      value={value}
      checked={selectedCategory === value}
      onChange={() => onChange(value)}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor={id}
      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
  </div>
);

const SortOrder = ({ selectedSortOption, onSortOptionChange }) => {
 
  return (
    <div>
       <p className="text-zinc-800 my-5 text-base font-semibold font-Poppins">Sort</p>

      <SortingOption
        id="most-popular"
        value="Most Popular"
        label="Most Popular"
        selectedCategory={selectedSortOption}
        onChange={onSortOptionChange}
      />
      <SortingOption
        id="newest"
        value="Newest"
        label="Newest"
        selectedCategory={selectedSortOption}
        onChange={onSortOptionChange}
      />
      <SortingOption
        id="price-low-high"
        value="Price low-high"
        label="Price Low-High"
        selectedCategory={selectedSortOption}
        onChange={onSortOptionChange}
      />
      <SortingOption
        id="price-high-low"
        value="Price high-low"
        label="Price High-Low"
        selectedCategory={selectedSortOption}
        onChange={onSortOptionChange}
      />
    </div>
  );
};

export default SortOrder;
