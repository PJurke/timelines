import Image from 'next/image'

const NoTimelineFound = () => {
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="m-auto text-center">
                <Image
                    alt="Icon for a failed search"
                    className="m-auto"
                    height={150}
                    src="/search-failed.png"
                    width={150}
                />
                <div className="text-2xl">
                    Timeline not found
                </div>
                <div className="text-gray-500 text-sm">
                    We haven't found the searched timeline.
                </div>
            </div>
        </div>
        
    );
};

export default NoTimelineFound;