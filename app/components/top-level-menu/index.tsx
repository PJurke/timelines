"use client"

import React, { useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";
import TopLevelMenuButton from "./button";

const TopLevelMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="bg-gray-800 border-b border-black flex text-white">
            <HamburgerMenu toggleFunction={handleClick} />
            {isOpen && (
                <>
                <TopLevelMenuButton title="Home" link="/" />
                <TopLevelMenuButton title="Timeline" link="/timeline" />
                </>
            )}
        </nav>

    );
};

export default TopLevelMenu;