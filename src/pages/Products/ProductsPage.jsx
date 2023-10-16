import React, { useState } from 'react';
import Categories from '../../components/filter/Categories';
import PriceRange from '../../components/filter/PriceRange';
import SortOrder from '../../components/filter/SortOrder';
import ProductCard from '../../components/ProductCards';
import { CiSearch } from 'react-icons/ci'
import SortingModal from '../../components/modals/SortingModal';
import PriceRangeModal from '../../components/modals/PriceRangeModal';
import CategoryModal from '../../components/modals/CategoryModal';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setMaxPrice, setMinPrice, setSortOption } from '../../store/actions/productActions';
import data from '../../data.json'
const ProductsPage = () => {
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const minPrice = useSelector((state) => state.products.minPrice);
  const maxPrice = useSelector((state) => state.products.maxPrice);
  const sortOption = useSelector((state) => state.products.sortOption);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isPriceRangeModalOpen, setIsPriceRangeModalOpen] = useState(false);
  const [priceGap, setPriceGap] = useState(1000);
  const [isSortingModalOpen, setIsSortingModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };
  const handlePriceInput = (e) => {
    const inputName = e.target.name;
    const value = parseInt(e.target.value);

    if (inputName === 'min' && value <= maxPrice - priceGap) {
      dispatch(setMinPrice(value));
    } else if (inputName === 'max' && value >= minPrice + priceGap) {
      dispatch(setMaxPrice(value));
    }
  };
  const handleRangeInput = (e) => {
    const inputName = e.target.name;
    const value = parseInt(e.target.value);

    if (inputName === 'min') {
      console.log("Min Prie is running", inputName)
      dispatch(setMinPrice(value));
    } else if (inputName === 'max') {
      console.log("Max Prie is running", inputName)

      dispatch(setMaxPrice(value));
    }
  };

  const handleSortOptionChange = (option) => {
    dispatch(setSortOption(option));
  };

  const openCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };

  const openPriceRangeModal = () => {
    setIsPriceRangeModalOpen(true);
  };

  const openSortingModal = () => {
    setIsSortingModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  const closePriceRangeModal = () => {
    setIsPriceRangeModalOpen(false);
  };

  const closeSortingModal = () => {
    setIsSortingModalOpen(false);
  };
  const filteredProducts = data.filter((product) => {
    return (
      (selectedCategory.includes('All') || selectedCategory.includes(product.category)) &&
      product.productPrice >= minPrice &&
      product.productPrice <= maxPrice
    );
  });

  console.log("Filtered Products", filteredProducts);
  const sortedProducts = [...filteredProducts];

  if (sortOption === 'Most Popular') {
    sortedProducts.sort((a, b) => b.totalReviews - a.totalReviews);
  } else if (sortOption === 'Newest') {
    sortedProducts.sort((a, b) => (a.newest ? -1 : 1));
  } else if (sortOption === 'Price Low-High') {
    sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
  } else if (sortOption === 'Price High-Low') {
    sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
  }

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:flex  md:justify-between my-5 mx-[20px] lg:mx-[120px]'>
        <div className="text-gray-900 my-auto mx-auto sm:mx-0 md:mx-0 text-[30px] sm:text-[25px] md:text-[40px] font-semibold font-['Poppins']">All Products</div>
        <div className="flex  border shadow border border-stone-300 rounded-full">
          <div className='my-auto py-[13px] md:py-0 pl-[16px]'>
            <CiSearch fontSize='27px' />
          </div>
          <input
            type="text"
            // className="w-[240px] my-auto md:[290px] lg:w-[332px]  rounded-full pl-[0.5rem] pr-4 w-64 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
             className="w-full my-auto md:[290px] lg:w-[332px]  rounded-full pl-[0.5rem] pr-4 w-64 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
           
            placeholder="Search"
          />
        </div>
      </div>
      <div style={{
        backgroundColor: '#CACACA', width: '90%', height: '1px', margin: '0 auto'
      }}>

      </div>
      <div className='flex p-4 lg:mx-[54px]'>

        <div className="w-1/4 p-8 md:p-4 lg:p-8 md:ml-0 lg:ml-[25px] hidden md:block">
          <Categories selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
          <PriceRange minPrice={minPrice} maxPrice={maxPrice} handlePriceInput={handlePriceInput} handleRangeInput={handleRangeInput} />
          <SortOrder selectedSortOption={sortOption} onSortOptionChange={handleSortOptionChange} />

        </div>
        {/* <div className='w-3/4 mx-auto md:ml-[67px]'> */}
        <div className=' mx-auto lg:ml-[67px]'>

          <div className="xs:flex justify-between md:hidden">
            <button type="button" onClick={openCategoryModal} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Catgeory</button>
            <button type="button" onClick={openPriceRangeModal} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Price Range</button>
            <button type="button" onClick={openSortingModal} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sorting</button>
            {isSortingModalOpen && <SortingModal open={isSortingModalOpen} closeSortingModal={closeSortingModal} selectedSortOption={sortOption} onSortOptionChange={handleSortOptionChange} />}
            {isPriceRangeModalOpen && <PriceRangeModal open={isPriceRangeModalOpen} closePriceRangeModal={closePriceRangeModal} minPrice={minPrice} maxPrice={maxPrice} handlePriceInput={handlePriceInput} handleRangeInput={handleRangeInput} />}
            {isCategoryModalOpen && <CategoryModal open={isCategoryModalOpen} closeCategoryModal={closeCategoryModal} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />}

          </div>
          <ProductCard products={sortedProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
