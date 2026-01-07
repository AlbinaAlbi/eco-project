import styles from './Menu.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { Language } from './Language';
import { Button } from '../../Button';
import { useLanguage } from '../../../context/LanguageContext';

export const Menu = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className="desktopOnly">
        <Language />
      </div>
      <div className="tabletAndMore">
        <Button text={t('volunteer')} />
      </div>
      <BurgerMenu />
    </div>
  );
};
