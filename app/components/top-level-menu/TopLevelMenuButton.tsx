import Link from 'next/link'

/* INTERFACE */

interface ButtonProps {
    link: string;
    title: string;
}

/*
    COMPONENT
    This component provides a default button for the top level menu.
*/

const TopLevelMenuButton = (props: ButtonProps) => {
    return (

        <Link className="block p-4" href={props.link}>{props.title}</Link>
        
    );
};

export default TopLevelMenuButton;