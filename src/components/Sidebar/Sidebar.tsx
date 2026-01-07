import { useSidebar } from '../../context/SidebarContext';
import { Language } from '../Header/Menu/Language';
import { NavLinks } from '../Header/NavLinks';
import styles from './Sidebar.module.scss';
import { Button } from '../Button';
import { useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../hooks/getDeviceType';

export const Sidebar = () => {
  const { isOpen } = useSidebar();
  const { t } = useLanguage();

  const device = useDeviceType();

  const buttonText = device === 'mobile' ? t('explore') : device === 'tablet' ? t('volunteer') : '';

  return (
    <div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.container}>
          <NavLinks />
          <Button text={buttonText} />
          <Language />
        </div>
      </div>
    </div>
  );
};
