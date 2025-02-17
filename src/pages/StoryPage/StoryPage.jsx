import { useState, useEffect } from "react";
import styles from "./StoryPage.module.scss";
import StoryText from "../../components/StoryText/StoryText";
import StoryMap from "../../components/StoryMap/StoryMap";

const StoryPage = () => {
  const [showGoUp, setShowGoUp] = useState(false);
  const handleGoUp = () => window.scrollTo({ top: 0, behavior: "smooth" })

  useEffect(() => {
    const handleScroll = () => {
      setShowGoUp(window.pageYOffset > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.storyPage__container}>
      <div 
        className={`${styles.goUp} ${!showGoUp && styles.hidden__goUp}`}
        onClick={handleGoUp}
      ></div> 
      <StoryText />
      <StoryMap />
    </div>
  );
};

export default StoryPage;
