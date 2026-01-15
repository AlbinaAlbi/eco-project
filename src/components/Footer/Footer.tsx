import { useBlockFooter } from '../../hooks/useBlockFooter';
import { BottomFooter } from './BottomFooter';
import { CardNav } from './CardNav';
import { EmailInput } from './EmailInput';
import styles from './Footer.module.scss';

export const Footer = () => {
  const footerList = useBlockFooter();

  return (
    <div className={styles.footerContainer}>
      <div className={`${styles.content}`}>
        <div className={`containerContentPadding containerMaxWidth ${styles.navAndEmail}`}>
          <div className={styles.navList}>
            {footerList.map((inforn) => (
              <CardNav key={inforn.id} inform={inforn} />
            ))}
          </div>

          <EmailInput />
        </div>

        <div className={styles.line} />

        <div className={`containerContentPadding containerMaxWidth`}>
          <BottomFooter />
        </div>
      </div>
    </div>
  );
};
