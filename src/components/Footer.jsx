import React from 'react'

const Footer = ({totalPrice}) => {
  return (
    <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl font-bold mt-4">
                        Quotation Summary
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">
                            Total 
                        </p>
                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                support
                            </a>

                        </div>
                </div>
                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold">
                        Total Portfolio Value
                    </h3>
                    <p className="text-2xl font-bold text-blue-400">Total Value</p>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-6">
                &copy;{new Date().getFullYear()} Monique Interiors. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer