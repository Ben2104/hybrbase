import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Top black announcement bar */}
            <div className="w-full bg-black relative">
                <div className="flex justify-between items-center text-white py-2 px-6">
                    <div className="font-medium">USD</div>
                    <div className="font-bold text-center">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25-28.</div>
                    <div className="font-medium">Support</div>
                </div>
            </div>
        </header>
    );
};

export default Header;