import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';
import QuoteBlock from '../../Blocks/QuoteBlock';

const SixthStory = () => {
  return (
    <div className={storyStyles.storyOuter}>
      <StoryHeading 
        number='VI'
        subhead='Apogee of the borders'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
            In the 70s BCE, Tigran II launched a campaign into the central regions of Cilicia, which had been under Roman influence since the time of Sulla (who served as governor of "Rough Cilicia"). During this campaign, the famous and wealthy ancient city of Soli was destroyed. Located on the border of the two Cilicias — Tracheia and Pedias — near the Liparis River (modern Mezitli River), Soli was a significant cultural and economic center. Its population was forcibly relocated to Tigranakert, as part of Tigran's strategy to strengthen his new capital.
        </p>
        <QuoteBlock
          quote='Tigran made Rome tremble before the power of his arms.'
          cite='Marcus Tullius Cicero'
        />
        <p className={storyStyles.text}>
            These military campaigns in Asia Minor and Cilicia marked the peak of Greater Armenia's dominance in the western direction. The contemporary Roman orator and politician Marcus Tullius Cicero noted that "Tigran made Rome tremble before the power of his arms." Cicero was well-informed about the region not only as a contemporary of Tigran and his successor Artavasdes II but also because he served as governor of Rome's eastern provinces in 50–51 BCE. During this time, he prepared to repel another Armenian invasion of Cappadocia and Cilicia led by Artavasdes II, who had recaptured Sophene and Lesser Armenia following the failure of Marcus Crassus's Parthian campaign.
        </p>
        <ImgBlock img='/images/krass.jpg' caption='Marcus Licinius Crassus' />
        <p className={storyStyles.text}>
            Thus, Tigran II's campaigns not only solidified Armenia's position in the region but also caused significant concern in Rome, highlighting the scale of his influence and military power.
        </p>
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default SixthStory;