import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { useStepsList } from '../../../hooks/useStepsList';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { TagAndTitle } from '../../../components/TagAndTitle';
import styles from './HowItWorks.module.scss';
import { StepsList } from '../../../components/StepsList';
import { useDeviceType } from '../../../hooks/getDeviceType';

export const HowItWorks = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.works;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  const stepsList = useStepsList();
  const device = useDeviceType();
  const onDesktop = device !== 'mobile';

  return (
    <div className={styles.container} id="works">
      <div className={`containerContentPadding containerMaxWidth ${styles.content}`}>
        <div className={onDesktop ? '' : 'wrapperTextAlign'}>
          <TagAndTitle
            tag={tag}
            title={title}
            tagColor={tagColor}
            titleColor={titleColor}
            alignLeft={true}
          />
        </div>

        <div className={styles.steps}>
          {stepsList.map((step) => (
            <StepsList key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};
