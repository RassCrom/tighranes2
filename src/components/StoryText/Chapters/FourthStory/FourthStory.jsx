import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const FourthStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='IV'
        subhead='From sea to sea'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
          After crossing the Tigris River, Tigran II captured the key cities of Edessa and Nisibis, bringing his domains close to the lands controlled by the Seleucids. In the western direction, the Armenian forces faced little resistance. After taking Commagene, they entered Syria unopposed. Historian R. L. Manaseryan, relying on accounts by Josephus, Dio Cassius, and Plutarch, notes that in 83 BCE, the population of Syria voluntarily invited Tigran II, and his ascension to the throne was peaceful. Plutarch describes Tigran's power, who by then had assumed the title of "King of Kings".
        </p>
        <ImgBlock img='/images/nisibis-b.png' caption='Info Nissibiss' size='big' />
        <p className={storyStyles.text}>
            The fall of the Seleucid Empire and the removal of its ruling dynasty by local aristocracy raised the question of new leadership. Initially, candidates such as the Egyptian Ptolemies and Mithridates VI Eupator were considered, but Tigran II was chosen. In 83 BCE, he was proclaimed king of Syria in the Seleucid capital of Antioch. The Armenian army continued its advance southward, capturing Lebanon (Phoenicia) and reaching the borders of Palestine. According to the Greco-Roman author Appian, Armenian forces even advanced as far as Egypt.
        </p>
        <QuoteBlock
          quote='When Tigranes began, his capabilities and plans were utterly insignificant, yet now he has conquered many nations and has broken the power of the Parthians as no one else before him has ever managed to do.'
          cite='Plutarch'
        />
        <p className={storyStyles.text}>
          Gnaeus Pompeius Trogus describes these events as follows: 
        </p>
        <p className={storyStyles.text} style={{color: '#EEC06A'}}>
          Mutual hatred between brothers, and then between their sons, who inherited their parents enmity, led to continuous wars that reduced both the Syrian kingdom and its kings to complete insignificance. In the end, the people sought external help and began to look for a foreign king… All agreed on the king of Armenia, Tigran, who, in addition to having his own armed forces, was also allied with the Parthian kingdom and related to Mithridates. Thus, summoned to the Syrian throne, he ruled peacefully for seventeen years.
        </p>
        <p className={storyStyles.text}>
          This period marked a time of stability and prosperity for Syria under Tigran II's rule.
        </p>
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default FourthStory;