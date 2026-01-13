import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { TagAndTitle } from '../TagAndTitle';
import styles from './HowItWorks.module.scss';
import { StepsList } from './StepsList';
import map from '../../imgs/Map.svg';
import info from '../../imgs/Info.svg';
import { useLanguage } from '../../context/LanguageContext';

export const HowItWorks = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.works;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const { t } = useLanguage();

  const stepsList = [
    {
      id: 1,
      titleKey: t('worksSteps.step1Title'),
      descriptionKey: t('worksSteps.step1Description'),
      icon: map,
    },
    {
      id: 2,
      titleKey: t('worksSteps.step2Title'),
      descriptionKey: t('worksSteps.step2Description'),
      icon: info,
    },
    {
      id: 3,
      titleKey: t('worksSteps.step3Title'),
      descriptionKey: t('worksSteps.step3Description'),
      icon: info,
    },
  ];

  return (
    <div className={styles.container}>
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
