import { Description } from '../../../components/Description';
import { Image } from '../../../components/Image';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './SendMessage.module.scss';
import greenField from '../../../imgs/green-field.jpg';
import { MessageBlock } from '../MessageBlock';
import { useDeviceType } from '../../../utils/getDeviceType';

export const SendMessage = () => {
  const { titleKey, descriptionKey, titleColor } = SECTION_HEADERS.message;
  const { title, description } = useSectionHeader({
    titleKey,
    descriptionKey,
  });
  const device = useDeviceType();
  const isMobile = device === 'mobile';

  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <TagAndTitle title={title} titleColor={titleColor} alignLeft={isMobile ? false : true} />

        <Description title={description} />

        <div className={styles.messageWrapper}>
          <MessageBlock />
        </div>
      </div>

      <div className={styles.image}>
        <Image img={greenField} alt="Green Field" />
      </div>
    </div>
  );
};
