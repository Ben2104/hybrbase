import React from 'react'
import Navbar from '../ components/Navbar'
import Link from 'next/link' // Import Link for navigation

const products = [
  {
    id: 1,
    name: 'Men’s Winter Jacket',
    href: '/product1', // Link to product1
    imageSrc: 'https://via.placeholder.com/300x300',
    imageAlt: "Front of men's Winter Jacket.",
    price: '$99',
    color: 'M',
  },
  {
    id: 2,
    name: 'Men’s Winter Jacket',
    href: '#',
    imageSrc: 'https://via.placeholder.com/300x300',
    imageAlt: "Front of men's Winter Jacket.",
    price: '$99',
    color: 'M',
  },
  // Add more products as needed
]

export default function Shop() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bgColor="bg-black" textColor="text-white" iconSrc="/cart2.png" border="border-white" />

      {/* Main Content */}
      <div className="bg-gray-100 text-black py-16 px-5">
        <div className="max-w-[1400px] mx-auto flex gap-8">
          {/* Filters Section */}
          <aside className="w-1/4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <button className="text-sm text-gray-500 mb-6 underline">Clear filters</button>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-2">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <span className="text-gray-700">Jackets</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">Fleece</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">Sweatshirts & Hoodies</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">Sweaters</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">Shirts</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">T-Shirts</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-gray-700">Pants & Jeans</span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Color Filters */}
            <div>
              <h3 className="text-sm font-bold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                <button className="w-6 h-6 rounded-full bg-orange-500"></button>
                <button className="w-6 h-6 rounded-full bg-purple-500"></button>
                <button className="w-6 h-6 rounded-full bg-green-500"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                <button className="w-6 h-6 rounded-full bg-red-500"></button>
              </div>
            </div>
          </aside>

          {/* Product Grid Section */}
          <main className="w-3/4">
            {/* Sort and Product Count */}
            <div className="flex justify-between items-center mb-6">
              <select className="border border-gray-300 text-sm px-3 py-2 rounded">
                <option value="popular">Sort By: Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
              <p className="text-sm text-gray-500">Showing {products.length} Products</p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={product.href}>
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="w-[265px] h-[331px] rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                  </Link>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-2 border border-black text-sm font-bold rounded">
                Load more products
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}