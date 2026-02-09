import { StepsList } from '../../../components/StepsList';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { useTransparentProcess } from '../../../hooks/useTransparentProcess';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './TransparentProcess.module.scss';

export const TransparentProcess = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.transparentProcess;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const device = useDeviceType();
  const isLeft = device === 'mobile' ? false : true;

  const stepsList = useTransparentProcess();

  return (
    <div className={`containerContentPadding containerMaxWidth ${styles.container}`}>
      <div className={`${styles.content}`}>
        <TagAndTitle
          tag={tag}
          title={title}
          tagColor={tagColor}
          titleColor={titleColor}
          alignLeft={isLeft}
        />
      </div>

      <div className={styles.steps}>
        {stepsList.map((step) => (
          <StepsList key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};
