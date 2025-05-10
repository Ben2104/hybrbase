import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
    return (
        <div className="w-full px-[323px] py-[62px]">
            <div className="max-w-[1400px] mx-auto px-5">
                <h1 className="text-6xl font-bold text-center mb-6">
                    Our latest arrivals
                </h1>
                <p className="text-lg text-center mb-8 text-gray-500 max-w-3xl mx-auto">
                    Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!
                </p>
                <div className="flex justify-center">
                    <button className="w-[194px] h-[50px] border border-black text-center">
                        Shop All
                    </button>
                </div>
            </div>

            {/* Product Grid Section */}
            <div className="flex justify-center gap-6 mt-12">
                {/* First Product Card */}
                <div className="relative w-[368px] h-[521px] mt-[125px] bg-gray-300 rounded">
                    {/* You can replace with actual product image when ready */}
                </div>
                
                {/* Second Product Card */}
                <div className="relative w-[368px] h-[521px] bg-gray-300 rounded">
                    {/* You can replace with actual product image when ready */}
                </div>
                
                {/* Third Product Card */}
                <div className="relative w-[368px] h-[521px] mt-[125px] bg-gray-300 rounded">
                    {/* You can replace with actual product image when ready */}
                </div>
            </div>
        </div>
    )
}

export default Hero2