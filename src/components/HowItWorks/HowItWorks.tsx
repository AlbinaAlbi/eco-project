import { useSectionHeader } from '../../hooks/useSectionHeader';
import { useStepsList } from '../../hooks/useStepsList';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { TagAndTitle } from '../TagAndTitle';
import styles from './HowItWorks.module.scss';
import { StepsList } from './StepsList';

export const HowItWorks = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.works;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const stepsList = useStepsList();

  return (
    <div className={styles.container} id="works">
      <div className={`containerContentPadding containerMaxWidth ${styles.content}`}>
        <TagAndTitle
          tag={tag}
          title={title}
          tagColor={tagColor}
          titleColor={titleColor}
          alignLeft={true}
        />

        <div className={styles.steps}>
          {stepsList.map((step) => (
            <StepsList key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};
