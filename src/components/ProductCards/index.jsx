import React from 'react';
import ll from '../../assets/BMW.png'
const ProductCard = ({products}) => {
  return (
    <div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {products?.map((item) => {
             return (
              <div key={item.id} className="max-w-sm w-full mx-auto md:mx-0 py-6  sm:w-full md:w-full lg:w-full">
                <div className="rounded-lg overflow-hidden">
                  <div
                    className="bg-cover rounded-[1.5rem] bg-center h-[17rem] p-4 bg-lightgray bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('${item?.productImage}')`,
                    }}>
                     {/* ${item?.productImage} */}
                      {/* <img src={item?.productImage} /> */}
                    <div className="flex justify-end">
                      <svg
                        className="h-6 w-6 text-white fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="p-2">
                      <p className="text-gray-900 text-xl font-semibold font-Poppins text-left">
                        {item?.productTitle}
                      </p>
                      <p className="text-neutral-500 text-base font-normal font-Poppins">{item?.productDescription}</p>
                    </div>
                    <div className="w-[54px] h-[31px] rounded-lg border border-indigo-600 mt-[0.5rem] mr-[0.6rem]">
                      <p className="text-indigo-600 text-[13px] font-normal font-Poppins p-[0.3rem]">${item?.productPrice}/d</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img
                        src={item?.sellerProfilePicture}
                        className="w-[37px] h-[37px] flex-shrink-0 rounded-full"
                        alt="Avatar"
                      />
                      <p className="text-[#313131] font-poppins text-base font-normal my-auto ml-[8px]">{item?.sellerName}</p>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <span className="cursor-pointer text-[1.3rem] text-yellow-500">&#9733;</span>
                      <p className="text-gray-500 font-poppins text-sm font-normal leading-normal">
                        {item?.rating} ({item?.totalReviews} reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
