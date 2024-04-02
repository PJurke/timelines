import HamburgerMenu from "./HamburgerMenu";
import TopLevelMenuButton from "./button";

const TopLevelMenu = () => {
    return (

        <nav className="bg-gray-800 border-b border-black flex text-white">
            <TopLevelMenuButton title="Home" link="/" />
            <TopLevelMenuButton title="Timeline" link="/timeline" />
            <HamburgerMenu />
        </nav>

    );
};

export default TopLevelMenu;