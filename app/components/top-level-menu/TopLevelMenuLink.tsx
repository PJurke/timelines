import Link from 'next/link'

/* INTERFACE */

interface ButtonProps {
    href: string;
    title: string;
    onClick?: () => void;
}

/*
    COMPONENT
    This component provides a default button for the top level menu.
*/

const TopLevelMenuLink = ({ title, href, onClick }: ButtonProps) => {
    return (

        <Link className="block p-4 hover:bg-white/10" href={href} onClick={onClick}>{title}</Link>
        
    );
};

export default TopLevelMenuLink;