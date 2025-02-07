import ContentStory from './Chapters/ContentStory/ContentStory';
import FirstStory from './Chapters/FirstStory/FirstStory';
import IntroStory from './Chapters/IntroStory/IntroStory';
import styles from './StoryText.module.scss';

const StoryText = () => {
  return (
    <div className={styles.textOuter}>
      <IntroStory />
      <ContentStory />
      <FirstStory />
    </div>
  );
};

export default StoryText;