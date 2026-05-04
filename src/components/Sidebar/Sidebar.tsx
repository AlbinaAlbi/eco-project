import { useSidebar } from '../../context/SidebarContext';
import { Language } from '../Header/Menu/Language';
import { NavLinks } from '../Header/NavLinks';
import styles from './Sidebar.module.scss';
import { Button } from '../Button';
import { useLanguage } from '../../context/LanguageContext';

export const Sidebar = () => {
  const { isOpen } = useSidebar();
  const { t } = useLanguage();

  return (
    <div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.container}>
          <NavLinks />
          <Button text={t('signIn')} buttonWidth={'336px'} />
          <Language />
        </div>
      </div>
    </div>
  );
};
