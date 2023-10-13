import React from 'react';
const CategoryOption = ({ id, value, label, selectedCategory, onChange }) => (
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      id={id}
      value={value}
      checked={selectedCategory?.includes(value)}
      onChange={() => onChange(value)}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor={id}
      className="text-gray-900 font-poppins text-base font-normal leading-normal ml-2 text-sm"
    >
      {label}
    </label>
  </div>
);

const Categories = ({ selectedCategory, onCategoryChange }) => {
   const handleCategoryChange = (category) => {
    let updatedCategories;
  
    if (Array.isArray(selectedCategory)) {
      updatedCategories = [...selectedCategory];
    } else {
      updatedCategories = [selectedCategory];
    }
  
    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((c) => c !== category);
    } else {
      updatedCategories.push(category);
    }
  
    onCategoryChange(updatedCategories); 
  };
  
  
  return (
    <div>
      <CategoryOption
        id="all-category"
        value="All"
        label="All"
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <CategoryOption
        id="Gaming Consoles"
        value="Gaming Consoles"
        label="Gaming Consoles"
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <CategoryOption
        id="Car"
        value="Car"
        label="Car"
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <CategoryOption
        id="Camera"
        value="Camera"
        label="Camera"
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
    </div>
  );
};

export default Categories;
