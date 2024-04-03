/* INTERFACE */

interface HamburgerMenuProps {
    toggleVisibility: () => void
}

/*
    COMPONENT
    This component provides the hamburger menu icon.
*/

const HamburgerMenu = (props: HamburgerMenuProps) => {

    return (

        <div className="p-4 self-end md:hidden">
            <button className="mobile-menu-button" onClick={props.toggleVisibility}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        
    );
};

export default HamburgerMenu;