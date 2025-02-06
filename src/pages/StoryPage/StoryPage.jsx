import styles from './StoryPage.module.scss'

import StoryText from "../../components/StoryText/StoryText";
import StoryMap from "../../components/StoryMap/StoryMap";

const StoryPage = () => {
  return (
    <div className={`${styles.storyPage__container}`}>
      <StoryText />
      <StoryMap />
    </div>
  );
};

export default StoryPage;
