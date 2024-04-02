"use client"

import React, { useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";
import TopLevelMenuButton from "./button";
import TopLevelMenuList from './TopLevelMenuList';


const TopLevelMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="bg-gray-800 border-b border-black flex flex-col md:flex-row text-white">
            <HamburgerMenu toggleFunction={handleClick} />
            <TopLevelMenuList isOpen={isOpen}>
                <TopLevelMenuButton title="Home" link="/" />
                <TopLevelMenuButton title="Timeline" link="/timeline" />
            </TopLevelMenuList>
        </nav>

    );
};

export default TopLevelMenu;