import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import { useDeviceType } from '../../utils/getDeviceType';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { RequestListProps } from '../../types/RequestListProps';
import styles from './RequestSupport.module.scss';
import { RequestInclude } from '../RequestInclude';
import { FormForBecome } from '../FormForBecome';
import { ProjectDescribe } from '../ProjectDescribe';

interface RequestSupportProps {
  requestList: RequestListProps[];
  section?: string;
}
export const RequestSupport = ({ requestList, section }: RequestSupportProps) => {
  const isRequest = section === 'request';
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = isRequest
    ? SECTION_HEADERS.request
    : SECTION_HEADERS.requestInclude;

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
        {!isDesktop && <RequestInclude list={requestList} />}
        {isRequest ? <FormForBecome /> : <ProjectDescribe />}
      </div>
      {isDesktop && <RequestInclude list={requestList} />}
    </div>
  );
};
