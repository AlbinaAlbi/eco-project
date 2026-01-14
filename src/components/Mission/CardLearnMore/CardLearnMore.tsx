import { NavLink } from 'react-router-dom';
import styles from './CardLearnMore.module.scss';
import arrow from '../../../imgs/Arrow.svg';
import { useDeviceType } from '../../../hooks/getDeviceType';

interface CardLearnMoreProps {
  title: string | string[];
  description: string | string[];
}

export const CardLearnMore = ({ title, description }: CardLearnMoreProps) => {
  const device = useDeviceType();
  const onDesktop = device === 'desktop';
  const titleLines = Array.isArray(title) ? title : [title];
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <div className={styles.container}>
      {!onDesktop && (
        <NavLink to="/about">
          <img src={arrow} alt="Arrow about" />
        </NavLink>
      )}
      <div className={styles.content}>
        <h4>
          {titleLines.map((part, index) => (
            <span key={index}>
              {part}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h4>
        <div className="textBody">
          {descriptionLines.map((part, index) => (
            <span key={index}>
              {part}
              {index < descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
