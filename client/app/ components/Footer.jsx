'use client'; // Add this if using Next.js App Router

import React, { useState, useEffect } from 'react';

const Footer = () => {
  // Use client-side rendering technique to avoid hydration issues
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="py-16 px-4 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Newsletter Section - Takes up more space */}
        <div className="md:w-5/12 mb-8 md:mb-0 md:pr-16">
            <h2 className="text-3xl font-bold mb-4">Sign up for our newsletter</h2>
            <p className="mb-6">Be the first to know about our special offers, new product launches, and events</p>
            <div className="flex border border-gray-300 w-full overflow-hidden" style={isClient ? { maxWidth: '398px' } : {}}>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full py-2 px-4 bg-transparent focus:outline-none"
                />
                <button className="hover:bg-gray-200 px-4 py-2 text-black font-bold whitespace-nowrap transition-colors">
                    Sign Up
                </button>
            </div>
        </div>

        {/* Links Container - Evenly spaced columns */}
        <div className="md:w-7/12 flex flex-col md:flex-row md:justify-between">
          {/* Shop Column */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-700">Women's</a></li>
              <li><a href="#" className="hover:text-gray-700">Men's</a></li>
              <li><a href="#" className="hover:text-gray-700">Kids'</a></li>
              <li><a href="#" className="hover:text-gray-700">Shoes</a></li>
              <li><a href="#" className="hover:text-gray-700">Equipment</a></li>
              <li><a href="#" className="hover:text-gray-700">By Activity</a></li>
              <li><a href="#" className="hover:text-gray-700">Gift Cards</a></li>
              <li><a href="#" className="hover:text-gray-700">Sale</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-700">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-700">Order Status</a></li>
              <li><a href="#" className="hover:text-gray-700">Size Chart</a></li>
              <li><a href="#" className="hover:text-gray-700">Returns & Warranty</a></li>
              <li><a href="#" className="hover:text-gray-700">Contact Us</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-gray-700">About Us</a></li>
              <li><a href="#" className="hover:text-gray-700">Responsibility</a></li>
              <li><a href="#" className="hover:text-gray-700">Technology & Innovation</a></li>
              <li><a href="#" className="hover:text-gray-700">Explore our stories</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;