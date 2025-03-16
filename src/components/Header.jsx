import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
        <div className="absolute top-1 left-1 items-center h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-gray-300">
          <img src="./src/assets/images/img30.jpeg"  alt="Logo" className="w-[160px] object-cover"/>
          
        </div>
        
      </div>
    </header>
  )
}

export default Header