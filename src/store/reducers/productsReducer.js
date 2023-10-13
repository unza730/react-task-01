import data from '../../data.json';
const initialState = {
  selectedCategory: ['All'],
  minPrice: 0,
  maxPrice: 1000,
  sortOption: 'Most Popular',
  products: data, 
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_PRICE_RANGE':
      return { ...state, minPrice: action.payload.min, maxPrice: action.payload.max };
    case 'SET_SORT_OPTION':
      return { ...state, sortOption: action.payload };
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.minPrice };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.maxPrice };
    default:
      return state;
  }
};

export default productsReducer;
