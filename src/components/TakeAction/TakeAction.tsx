import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { TagAndTitle } from '../TagAndTitle';
import styles from './TakeAction.module.scss';

export const TakeAction = () => {
  return (
    <div className={styles.container}>
      <TagAndTitle data={SECTION_HEADERS.action} />
    </div>
  );
};
