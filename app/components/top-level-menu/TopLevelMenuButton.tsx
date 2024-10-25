import Link from 'next/link'

/* INTERFACE */

interface ButtonProps {
    link: string;
    title: string;
    onClick?: () => void;
}

/*
    COMPONENT
    This component provides a default button for the top level menu.
*/

const TopLevelMenuButton = ({ title, link, onClick }: ButtonProps) => {
    return (

        <Link className="block p-4" href={link} onClick={onClick}>{title}</Link>
        
    );
};

export default TopLevelMenuButton;