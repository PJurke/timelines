"use client"

import React, { useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";
import TopLevelMenuButton from './TopLevelMenuButton';
import TopLevelMenuList from './TopLevelMenuList';

const TopLevelMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="bg-gray-800 border-b border-black flex flex-col md:flex-row text-white">
            <HamburgerMenu toggleVisibility={toggleVisibility} />
            <TopLevelMenuList isOpen={isOpen}>
                <TopLevelMenuButton title="Home" link="/" />
                <TopLevelMenuButton title="Timeline" link="/timeline" />
            </TopLevelMenuList>
        </nav>

    );
};

export default TopLevelMenu;