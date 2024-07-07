import ContentUnavailableView from '../../../general/ContentUnavailableView';

const NoTimelineFound = () => {
    return (
        <ContentUnavailableView
            imageAlt='An icon representing a failed search'
            imageSrc='/search-failed.png'
            title='Timeline not found'
            description='We haven&#39;t found the searched timeline.'
        />
    );
};

export default NoTimelineFound;