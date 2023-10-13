import React from 'react';
import SortOrder from '../filter/SortOrder';

const SortingModal = ({ selectedSortOption, onSortOptionChange, closeSortingModal }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
        <div className="bg-white w-3/4 sm:w-1/2 rounded-lg p-8">
          <h2 className="text-lg font-bold mb-4">Sorting Modal</h2>
          <SortOrder
            selectedSortOption={selectedSortOption}
            onSortOptionChange={onSortOptionChange}
          />

          <button
            type="button"
            className="py-2 px-4 mt-4 text-sm font-medium text-white bg-blue-700 hover:bg-blue-900 rounded-lg focus:outline-none"
            onClick={closeSortingModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingModal;
