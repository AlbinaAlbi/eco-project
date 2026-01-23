import { NavLink } from 'react-router-dom';
import styles from './CardLearnMore.module.scss';
import arrow from '../../../../imgs/Arrow.svg';
import { useDeviceType } from '../../../../hooks/getDeviceType';
import { useRenderText } from '../../../../hooks/renderText';

interface CardLearnMoreProps {
  title: string | string[];
  description: string | string[];
}

export const CardLearnMore = ({ title, description }: CardLearnMoreProps) => {
  const { renderText } = useRenderText();
  const device = useDeviceType();
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
      </div>
    </div>
  );
};
