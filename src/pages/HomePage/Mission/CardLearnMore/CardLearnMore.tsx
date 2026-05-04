import { NavLink } from 'react-router-dom';
import styles from './CardLearnMore.module.scss';
import arrow from '../../../../imgs/Arrow.svg';
import { useDeviceType } from '../../../../utils/getDeviceType';
import { useRenderText } from '../../../../hooks/useRenderText';
import { Button } from '../../../../components/Button';
import { useLanguage } from '../../../../context/LanguageContext';

interface CardLearnMoreProps {
  title: string | string[];
  description: string | string[];
}

export const CardLearnMore = ({ title, description }: CardLearnMoreProps) => {
  const { renderText } = useRenderText();
  const device = useDeviceType();
  const { t } = useLanguage();
  const onDesktop = device === 'desktop';

  return (
    <div className={styles.container}>
      {!onDesktop && (
        <NavLink to="/about">
          <img src={arrow} alt="Arrow about" />
        </NavLink>
      )}
      <div className={styles.content}>
        <h4>{renderText(title)}</h4>
        <div className="textBody">{renderText(description)}</div>
        {onDesktop && <Button text={t('about')} color="white" buttonWidth="285px" to="/about" />}
      </div>
    </div>
  );
};
