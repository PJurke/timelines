import React, { ReactNode } from "react";

/* INTERFACE */

interface TopLevelMenuListProps {
    children: ReactNode
    isOpen: boolean;
}

/*
    COMPONENT
    This component lists links of the top level menu bar.
*/

const TopLevelMenuList = (props: TopLevelMenuListProps) => {

    const style = props.isOpen ? 'flex' : 'hidden';

    return (

        <div className={`${style} flex-col md:flex md:flex-row`}>
            {props.children}
        </div>
        
    );
};

export default TopLevelMenuList;