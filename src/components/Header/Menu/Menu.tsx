import styles from './Menu.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { Language } from './Language';
import { Button } from '../../Button';
import { useLanguage } from '../../../context/LanguageContext';
import { useSidebar } from '../../../context/SidebarContext';

export const Menu = () => {
  const { t } = useLanguage();
  const { isOpen } = useSidebar();

  return (
    <div className={styles.container}>
      <div className="desktopOnly">
        <Language />
      </div>
      <div
        className={`
          tabletAndMore
          ${isOpen ? styles.hidden : styles.visible}
        `}
      >
        <Button text={t('help')} buttonWidth={'186px'} to="/help" />
      </div>
      <BurgerMenu />
    </div>
  );
};
