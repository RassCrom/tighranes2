import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';

const EighthStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='VIII'
        subhead='Epilogue'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
            In 66 BC, Tigranes was forced to make peace with Rome. Under the terms of the treaty, he lost a significant portion of his territories, including Syria and Phoenicia, but retained power over Armenia. Rome recognized him as king, and Tigranes continued to rule, though no longer as a great conqueror but as an ally of Rome. The final years of his reign passed in relative peace, allowing Armenia to recover and preserve its culture and independence.
        </p>
        <p className={storyStyles.text} style={{color: '#EEC06A'}}>
            The last 10 years of Tigranes II's reign were peaceful. During this time, due to his advanced age, he was assisted in ruling by his son, the future King of Armenia, Artavasdes II. Tigranes II passed away in 55 BC at the age of 85. His death marked the end of an era, but his legacy as a great ruler and his efforts to preserve Armenia's independence continued to influence the region for generations to come.
        </p>
        <ImgBlock img='/images/artavasdes-2.png' caption='Artvasdes II' />
      </div>
    </div>
  );
};

export default EighthStory;