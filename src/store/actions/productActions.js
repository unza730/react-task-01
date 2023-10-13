
export const setCategory = (category) => {
    return { type: 'SET_CATEGORY', payload: category };
  };
  
  export const setMinPrice = (minPrice) => ({
    type: "SET_MIN_PRICE",
    minPrice,
  });
  
  export const setMaxPrice = (maxPrice) => ({
    type: "SET_MAX_PRICE",
    maxPrice,
  });
  export const setSortOption = (sortOption) => {
    return { type: 'SET_SORT_OPTION', payload: sortOption };
  };
  