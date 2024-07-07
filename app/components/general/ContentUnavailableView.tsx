import Image from 'next/image'

const ContentUnavailableView = (props: ContentUnavailableProps) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="m-auto text-center">
                <Image
                    alt={props.imageAlt}
                    className="m-auto"
                    height={150}
                    src={props.imageSrc}
                    width={150}
                />
                <h1 className="text-2xl">{props.title}</h1>
                <p className="text-gray-500 text-sm">{props.description}</p>
            </div>
        </div>
    );
};

interface ContentUnavailableProps {
    imageAlt: string
    imageSrc: string
    title: string
    description: string
}

export default ContentUnavailableView;