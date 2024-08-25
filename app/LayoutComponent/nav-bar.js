"use client"
import { useState } from 'react';
import Link from "next/link";

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setShowDropdown(showDropdown === index ? null : index);
    };

    const dummyDropdownValues = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    return (
        <div id="navbar" className="flex flex-row gap-1 text-center h-8 border-gray-400 text-gray-100">
            <div className="relative flex-1 bg-blue-500 hover:bg-blue-800">
                <div onClick={() => toggleDropdown(0)}>Beautifiers</div>
                {showDropdown === 0 && (
                    <div className="absolute left-0 w-full bg-blue-600 z-50">
                        {dummyDropdownValues.map((value, index) => (
                            <div key={index} className="p-2 hover:bg-gray-600">
                                {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative flex-1 bg-blue-500 hover:bg-blue-800">
                <div onClick={() => toggleDropdown(1)}>Converters</div>
                {showDropdown === 1 && (
                    <div className="absolute left-0 w-full bg-blue-600 z-50">
                        {dummyDropdownValues.map((value, index) => (
                            <div key={index} className="p-2 hover:bg-gray-600">
                                {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative flex-1 bg-blue-500 hover:bg-blue-800">
                <div onClick={() => toggleDropdown(2)}>Compilers</div>
                {showDropdown === 2 && (
                    <div className="absolute left-0 w-full bg-blue-600 z-50">
                        {dummyDropdownValues.map((value, index) => (
                            <div key={index} className="p-2 hover:bg-gray-600">
                                {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
