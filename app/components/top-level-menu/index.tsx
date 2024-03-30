import TopLevelMenuButton from "./button";

const TopLevelMenu = () => {
    return (
        <div className="border-b border-black flex">
            <TopLevelMenuButton title="Home" link="/" />
        </div>
    );
};

export default TopLevelMenu;