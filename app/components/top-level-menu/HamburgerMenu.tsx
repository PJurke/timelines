const HamburgerMenu = (props: HamburgerMenuProps) => {

    return (
        <div className="md:hidden flex items-center p-4">
            <button className="mobile-menu-button" onClick={props.toggleFunction}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    );
};

interface HamburgerMenuProps {
    toggleFunction: () => void
}

export default HamburgerMenu;