import React from "react";

const Card = ({ image, title, price1, description,desc2,desc3,price2,price3,price4,desc4,labour }) => {
  return (
    <div className="flex max-w-[86%] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {/* Image Section */}
      <img className="w-[60%]  object-cover" src={image} alt={title} />

      {/* Description Section */}
      <div className="p-4 flex-1 w-full">
        {/* Title & Price Row */}
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-2xl font-semibold text-center ml-[30%]">{title}</h3>
          
        </div>

        {/* Description */}
        <div className="w-[90] relative mt-8">
            <p className="flex ml-4 mr-9 pr-4 text-lg font-bold mb-5">Categories <span className="flex ml-5 pl-5 mb-3">Price(Ksh)</span></p>
        <p className="flex w-full mx-auto mb-4">{description}<span className="flex mx-auto">{price1}</span></p>
        <p className="flex w-full mx-auto mb-3">{desc2}<span className="flex mx-auto">{price2}</span></p>
        <p className="flex w-full mx-auto">{desc3}<span className="flex mx-auto">{price3}</span></p>
        <p className="flex w-full mx-auto mb-4">{desc4}<span className="flex mx-auto">{price4}</span></p>
        <p className="flex w-full mx-auto">--: Labour<span className="flex mx-auto">{labour}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Card;