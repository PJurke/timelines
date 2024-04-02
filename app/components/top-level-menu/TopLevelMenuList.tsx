import React, { ReactNode } from "react";

const TopLevelMenuList = (props: TopLevelMenuListProps) => {

    const style = props.isOpen ? 'flex' : 'hidden';

    return (
        <div className={`${style} flex-col md:flex md:flex-row`}>
            {props.children}
        </div>
    );
};

interface TopLevelMenuListProps {
    children: ReactNode
    isOpen: boolean;
}

export default TopLevelMenuList;