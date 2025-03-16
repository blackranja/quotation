import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Card = ({ image, title, price1, description,desc2,desc3,price2,price3,price4,desc4,labour,icon }) => {
  return (
    <div className="flex max-w-[86%] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mx-auto">
      {/* Image Section */}
      <img className="w-[60%] object-cover overflow-hidden " src={image} alt={title} />

      {/* Description Section */}
      <div className="p-4 flex-1 w-full bg-gray-300">
        {/* Title & Price Row */}
        <div className="flex justify-between items-center mt-[30%]">
          <h3 className="text-2xl font-semibold text-center justify-between">{title}</h3>
          
        </div>

        {/* Description */}
        <div className="w-[90] relative mt-8 mx-auto justify-between">
            <p className="flex text-lg font-bold mb-5 justify-between">Categories <span className="flex mb-3">Price(Ksh)</span></p>
        <p className="flex mb-4 font-bold text-lg text-gray-800 justify-between"><span className="flex mr-4">{description ? icon : ""}{description}</span><span className="flex">{price1}</span></p>
        <p className="flex w-full mx-auto mb-3 font-bold text-lg text-gray-800 justify-between"><span className="flex mr-2">{desc2 ? icon : ""}{desc2}</span><span className="flex">{price2}</span></p>
        <p className="flex  mb-5 font-bold text-lg text-gray-800 justify-between"><span className="flex mr-2">{desc3 ? icon : ""}{desc3}</span><span className="flex">{price3}</span></p>
        <p className="flex mb-4 font-bold text-lg text-gray-800 justify-between"><span className="flex mr-2">{desc4 ? icon : ""}{desc4}</span><span className="flex">{labour}</span></p>
        
        </div>
      </div>
    </div>
  );
};

export default Card;