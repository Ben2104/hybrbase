import React from 'react'
import Image from 'next/image'
const Hero1 = () => {
    return (
        <div className="w-full px-[323px] py-[62px]">
            <div className="max-w-[1400px] mx-auto px-5">
                <h1 className="text-6xl font-bold text-center mb-6">
                    Better clothing for the planet
                </h1>
                <p className="text-lg text-center mb-8 text-gray-500 max-w-3xl mx-auto">
                    Create screens directly in Method or add your images from Sketch or
                    Figma. You can even sync designs from your cloud storage!
                </p>
                <div className="flex justify-center">
                    <button className="w-[194px] h-[50px] border border-black text-center">
                        Shop All
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div
                    className="relative w-[1114px] h-[521px] rounded bg-cover bg-center"
                    style={{ backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)" }}
                ></div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="relative w-[855px] h-[67px] flex items-center justify-between">
                    <Image
                        src="/TheNewYork.png"
                        alt="The New York Times Logo"
                        width={229.84}
                        height={34}
                        className="object-contain"
                    />
                    <Image
                        src="/Vogue.png"
                        alt="Vogue Logo"
                        width={119}
                        height={32}
                        className="object-contain"
                    />
                    <Image
                        src="/VanityFair.png"
                        alt="Vanity Fair Logo"
                        width={152}
                        height={33}
                        className="object-contain"
                    />
                    <Image
                        src="/cnbc.png"
                        alt="CNBC Logo"
                        width={186}
                        height={67}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero1