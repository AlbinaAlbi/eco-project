import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import styles from './ReadyToHelp.module.scss';

interface ReadyToHelpProps {
  title: string;
  description: string;
}

export const ReadyToHelp = ({ title, description }: ReadyToHelpProps) => {
  const { t } = useLanguage();

  const device = useDeviceType();

  let buttonWidth;

  switch (device) {
    case 'tablet':
      buttonWidth = '248px';
      break;
    case 'desktop':
      buttonWidth = '285px';
      break;
    default:
      buttonWidth = '372px';
  }

  return (
    <div className={styles.container}>
      <TagAndTitle title={title} />
      <Description title={description} />
      <div className={styles.buttons}>
        <Button text={t('donate')} color="green" buttonWidth={buttonWidth} to="donate" />
        <Button
          text={t('joinAsVolunteer')}
          color="white"
          buttonWidth={buttonWidth}
          to="volunteer"
        />
      </div>
    </div>
  );
};
