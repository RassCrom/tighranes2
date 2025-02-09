import storyStyles from './StoryHeading.module.scss'

const StoryHeading = ({number, subhead, caption}) => {
  return (
    <div className={storyStyles.storyHeading}>
        {number && <h3 className={storyStyles.storyHeadingNumber}>{number}</h3>}
        <h2 className={storyStyles.storySubheading}>
            {subhead}
        </h2>
        <p className={storyStyles.storyHeadingCaption}>
            {caption}
        </p>
    </div>
  );
};

export default StoryHeading;