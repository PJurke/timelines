import TopLevelMenuButton from "./button";

const TopLevelMenu = () => {
    return (
        <div className="border-b border-black flex">
            <TopLevelMenuButton title="Home" link="/" />
            <TopLevelMenuButton title="Timeline" link="/timeline" />
        </div>
    );
};

export default TopLevelMenu;