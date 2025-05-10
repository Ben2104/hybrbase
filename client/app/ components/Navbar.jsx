import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ bgColor = 'bg-white', textColor = 'text-black', iconSrc = '/cart1.png', border }) => {
    return (
        <nav className={`w-full h-[60px] sticky top-0 z-50 border-b ${border || 'border-[#000000]'} ${bgColor}`}>
            <div className="max-w-[1400px] mx-auto flex justify-between items-center h-full px-5">
                <div className="navbar-links">
                    <ul className="flex list-none m-0 p-0 items-center">
                        <li>
                            <Link href="/" className={`mx-4 navbar-logo font-bold text-xl no-underline ${textColor}`}>
                                Ecommerce
                            </Link>
                        </li>
                        <li className="mx-4">
                            <Link href="/shop" className={`no-underline ${textColor}`}>Shop</Link>
                        </li>
                        <li className="mx-4">
                            <Link href="/stories" className={`no-underline ${textColor}`}>Stories</Link>
                        </li>
                        <li className="mx-4">
                            <Link href="/about" className={`no-underline ${textColor}`}>About</Link>
                        </li>
                        <li className="relative mx-4">
                            <FiSearch className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 ${textColor}`} />
                            <input
                                type="text"
                                placeholder="Search"
                                className={`pl-9 pr-2 rounded border-none border-gray-300 focus:outline-none ${textColor}`}
                            />
                        </li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <div className={`relative mr-5 p-1 rounded-full`}>
                        <Image src={iconSrc} alt="Shopping Bag" width={18} height={21} />
                        <span className={`absolute -top-2 -right-2 ${textColor} text-xs h-[18px] w-[18px] flex items-center justify-center rounded-full`}>3</span>
                    </div>

                    <Link href="/login" className={`no-underline ${textColor}`}>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar