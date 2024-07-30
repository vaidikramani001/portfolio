import React from 'react';

const Header = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="flex flex-row p-4 md:p-8 justify-between items-center space-x-4 w-full">
                <div className="flex-shrink-0">
                    <img src="https://www.logologo.com/logos/dragon-logo-design-free-logo.jpg" className="h-12 w-12 md:h-20 md:w-20" alt="Logo" />
                </div>
                <div className="flex-grow flex justify-center space-x-4 text-lg">
                    <div className="hover:underline">
                        About
                    </div>
                    <div className="hover:underline">
                        Work
                    </div>
                    <div className="hover:underline">
                        Contact
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Hire me!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
