import storyStyles from '../../StoryText.module.scss'
import StoryHeading from '../../StoryHeading/StoryHeading';
import ImgBlock from '../../Blocks/ImgBlock';

const SeventhStory = ({ref}) => {
  return (
    <div className={storyStyles.storyOuter} ref={ref}>
      <StoryHeading 
        number='VII'
        subhead='War against Rome'
        caption=''
      />
      <div className={storyStyles.storyText}>
        <p className={storyStyles.text}>
            The Third Mithridatic War became one of the key conflicts in the history of Armenia and the Roman Empire. Tigranes the Great, an ally of Pontic King Mithridates VI, was drawn into the confrontation with Rome. The Romans, seeking to strengthen their position in Asia Minor, saw Tigranes as a threat to their interests. The war began in 73 BC, and Armenia became one of the main theaters of military operations. Roman legions under the command of Lucullus marched east to crush the power of Tigranes and his allies.
        </p>
        <p className={storyStyles.text}>
            One of the first major battles was the Battle of Tigranakert, the new capital of Armenia built by Tigranes. In 69 BC, Roman forces besieged the city. Despite the numerical superiority of the Armenian army, Lucullus used tactics that allowed him to secure victory. The Armenian troops, composed of diverse units, were unable to withstand the disciplined Roman legions. The fall of Tigranakert was a heavy blow to Tigranes, but he did not surrender and continued the fight. 
        </p>
        <ImgBlock img='/images/tigran-b.png' caption='Tigranakert battle' size='big' />
        <p className={storyStyles.text}>
            After the defeat at Tigranakert, Tigranes retreated to the old capital of Armenia—Artaxata. In 68 BC, a new battle took place here. Lucullus, confident in his victory, marched on Artaxata, but this time the Armenian forces put up fierce resistance. Harsh climatic conditions and supply difficulties weakened the Romans, forcing them to retreat. This victory temporarily halted the Roman advance into Armenia and gave Tigranes the opportunity to regroup his forces.
        </p>
        <ImgBlock img='/images/artaxata-b.png' caption='Info Artaxat' size='big' />
        <p className={storyStyles.text}>
            Taking advantage of the respite, Tigranes organized a counteroffensive in Asia Minor. He sought to reclaim lost territories and weaken Roman influence in the region. Armenian forces carried out swift raids, attacking Roman garrisons and cities allied with Rome. These actions caused panic among Rome's allies and forced the Romans to reconsider their strategy. However, Tigranes' successes were temporary, as the Romans were already preparing a new strike. 
        </p>
        <p className={storyStyles.text}>
            Pompey and Parthia against Tigranes In 66 BC, Gnaeus Pompey became the Roman commander, significantly increasing pressure on Armenia. At the same time, the Parthians, former allies of Armenia, turned against Tigranes. The Parthian king Phraates III made an agreement with Rome, putting Tigranes in an extremely difficult position. Pompey, using diplomacy and military force, managed to isolate Tigranes and deprive him of support. Armenia found itself surrounded by enemies. 
        </p>
        <ImgBlock img='/images/pompey.jpg' caption='Gney Pompey' />
      </div>
      <div className={storyStyles.outerDivider}></div>
    </div>
  );
};

export default SeventhStory;