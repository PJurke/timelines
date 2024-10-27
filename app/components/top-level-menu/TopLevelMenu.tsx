"use client"

import React, { useEffect, useRef, useState } from 'react';
import HamburgerMenu from "./HamburgerMenu";
import TopLevelMenuLink from './TopLevelMenuLink';
import TopLevelMenuList from './TopLevelMenuList';

const TopLevelMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Bereinigung des Event-Listeners beim Unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (

        <nav className="bg-gray-800 border-b border-black flex flex-col md:flex-row sticky text-white top-0" ref={menuRef}>
            <HamburgerMenu toggleVisibility={toggleVisibility} isOpen={isOpen} />
            <TopLevelMenuList isOpen={isOpen}>
                <TopLevelMenuLink title="Home" href="/" onClick={closeMenu} />
                <TopLevelMenuLink title="Timelines" href="/timeline" onClick={closeMenu} />
            </TopLevelMenuList>
        </nav>

    );
};

export default TopLevelMenu;