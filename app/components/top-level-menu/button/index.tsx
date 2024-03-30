import Link from 'next/link'

const TopLevelMenuButton = (props: ButtonProps) => {
    return (
        <Link className="p-4" href={props.link}>{props.title}</Link>
    );
};

interface ButtonProps {
    link: string;
    title: string;
}

export default TopLevelMenuButton;