import React from 'react'

const Hero = () => {
  return (
    <section className="py-6 mt-[120px] mb-[180px]">
        <div className="container mx-auto px-6 md:px-12 flex-col md:flex-row items-center justify-between">
            <div className="absolute left-[130px] top-[120px] md:w-1/2 text-center md:text-left p-2 mx-auto">
             <p className=" text-lg font-bold w-[150px] text-white bg-orange-400 p-1 rounded-md">
                Customer Name
             </p>
             <p className="text-lg text-gray-800 p-2 shadow-lg font-bold w-[150px] rounded-lg shadow-orange-500">
                Lucky wahuko
                </p>

            </div>
            
            <div className="absolute right-[30px] top-[30px] mt-10  justify-end shadow-orange-500 shadow-lg rounded-lg px-2 py-1">
                <h1 className="w-full text-4xl font-bold text-orange-400">
                QUOTATION

            </h1>
            </div>
            
            <div className="absolute pb-2 mt-2 jusitify-between top-[130px] right-[30px] px-2 rounded-lg w-[200px] shadow-orange-500 shadow-lg">
            <p className="flex justify-between text-orange-500 text-md font-bold mt-4">
                Date:<span className=" px-2 rounded-lg ml-5 text-sm text-white font-bold border border-1 border-orange-500 bg-orange-500">16/3/2025</span>
            </p>
            <p className="flex justify-between text-orange-500 text-md font-bold mt-2">
            Valid Until: 
            <span className=" px-2 rounded-lg ml-5 text-sm text-white font-bold border border-1 border-orange-500 bg-orange-500">N/A</span>
             </p>  <p className="flex justify-between mt-2 text-orange-500 text-md font-bold">    Quote#: <span className=" px-2 rounded-lg ml-5 text-sm text-white font-bold border border-1 border-orange-500 bg-orange-500">0177</span></p>
            </div>
            <div className="absolute rounded-lg right-[400px] top-[140px] shadow-orange-500 shadow-lg w-[250px]">
                <p className="flex px-2 bg-orange-500 text-white font-bold text-md">
                Quote/Project Description
                </p><p className="font-bold text-md px-2">Interior Design and Decor
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero