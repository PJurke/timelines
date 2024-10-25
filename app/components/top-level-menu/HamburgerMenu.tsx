/* INTERFACE */

interface HamburgerMenuProps {
    toggleVisibility: () => void
    isOpen: boolean
}

/*
    COMPONENT
    This component provides the hamburger menu icon.
*/

const HamburgerMenu = ({toggleVisibility, isOpen}: HamburgerMenuProps) => {

    return (

        <div className="p-4 self-end md:hidden">
            <button aria-label={isOpen ? "Close Menu" : "Open Menu"} className="mobile-menu-button" onClick={toggleVisibility} type="button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
            </button>
        </div>
        
    );
};

export default HamburgerMenu;