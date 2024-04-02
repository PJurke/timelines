const HamburgerMenu = () => {
    return (
        <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    );
};

export default HamburgerMenu;