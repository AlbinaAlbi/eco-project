import { NavLink } from 'react-router-dom';
import styles from './CardLearnMore.module.scss';
import arrow from '../../../imgs/Arrow.svg';
import { useDeviceType } from '../../../hooks/getDeviceType';

export const CardLearnMore = () => {
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
        <h4>Learn more about our mission</h4>
        <div className="textBody">
          Discover who we are, what we stand for, and how we work to support local eco-initiatives
        </div>
      </div>
    </div>
  );
};
