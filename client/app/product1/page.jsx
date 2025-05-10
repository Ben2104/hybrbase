import React from 'react'
import Navbar from '../ components/Navbar'

const Product = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bgColor="bg-black" textColor="text-white" iconSrc="/cart2.png" border="border-white" />

            {/* Main Content */}
            <div className="text-black py-16 px-5">
                <div className="max-w-[1400px] mx-auto flex gap-8">
                    {/* Product Images */}
                    <div className="w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-gray-300 aspect-square"></div>
                        <div className="bg-gray-300 aspect-square"></div>
                        <div className="bg-gray-300 aspect-square"></div>
                        <div className="bg-gray-300 aspect-square"></div>
                    </div>

                    {/* Product Details */}
                    <div className="w-1/2">
                        {/* Title and Icons */}
                        <div className="flex items-center gap-4 mb-4">
                            {/* Product Title */}
                            <h1 className="text-2xl font-bold">Men’s Winter Jacket</h1>

                            {/* Icons */}
                            <div className="flex items-center gap-2">
                                {/* Heart Icon */}
                                <button aria-label="Add to Wishlist">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                        />
                                    </svg>
                                </button>

                                {/* External Link Icon */}
                                <button aria-label="Share Product">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 13.5V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V8.25A2.25 2.25 0 016.75 6h4.5M15 3h6m0 0v6m0-6L10.5 14.25"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Price and Payment Options */}
                        <div className="flex items-center gap-2 mb-2">
                            <p className="text-lg font-medium text-gray-900">$99</p>
                            <span className="border border-gray-400 px-2 py-1 rounded text-sm text-gray-500">
                                or 4 interest-free payments of $25.00. <a href="#" className="underline">Learn more</a>
                            </span>
                        </div>
                        <p className="text-sm text-gray-700 w-[357px] h-[104px]">
                            Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.
                        </p>

                        {/* Color Options */}
                        <div className="mb-2">
                            <h3 className="text-sm mb-2">Color</h3>
                            <div className="flex gap-2">
                                <button className="w-[50px] h-[50px] rounded-full bg-orange-500"></button>
                                <button className="w-[50px] h-[50px] rounded-full bg-black"></button>
                            </div>
                        </div>

                        {/* Size Options */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold mb-2">Size</h3>
                            <div className="flex gap-2">
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                                    <button
                                        key={size}
                                        className="px-4 py-2 border border-gray-400 text-sm font-medium rounded hover:border-black"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <a href="#" className="text-sm text-gray-500 underline mt-2 inline-block">Size & Fit Guide</a>
                            <p className="text-sm text-gray-500 mt-1 w-[350px] h-[20px]">Height of model: 189 cm. / 6' 2" Size 41</p>
                        </div>

                        {/* Add to Cart Section */}
                        <div className="flex items-center gap-1 mb-6">
                            {/* Add to Cart Button */}
                            <button className="bg-black text-white text-sm font-bold rounded w-[350px] h-[50px]">
                                Add to Cart - $250
                            </button>

                            {/* Quantity Selector */}
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-gray-500 mb-0">Quantity</p>
                                <div className="flex items-center border border-gray-400 rounded w-[100px] h-[50px]">
                                    <button className="px-3 py-2 text-sm font-bold">-</button>
                                    <span className="px-4 py-2 text-sm">2</span>
                                    <button className="px-3 py-2 text-sm font-bold">+</button>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Info */}
                        <div className="text-sm text-gray-500">
                            <p>Free standard shipping</p>
                            <a href="#" className="underline">Free Returns</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product