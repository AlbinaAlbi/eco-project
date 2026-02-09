import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { ProjectDescribe } from '../ProjectDescribe';
import { RequestInclude } from '../RequestInclude';
import styles from './RequestSupport.module.scss';

export const RequestSupport = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.request;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });
  const device = useDeviceType();
  const isDesktop = device === 'desktop';

  return (
    <div className={`containerContentPadding containerMaxWidth ${styles.container}`}>
      <div className={styles.box}>
        <TagAndTitle
          tag={tag}
          title={title}
          tagColor={tagColor}
          titleColor={titleColor}
          alignLeft={isDesktop ? true : false}
        />
        <Description title={description} />
        {!isDesktop && <RequestInclude />}
        <ProjectDescribe />
      </div>
      {isDesktop && <RequestInclude />}
    </div>
  );
};
