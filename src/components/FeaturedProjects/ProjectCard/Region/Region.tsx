import styles from './Region.module.scss';
import Location from '../../../../imgs/Location.svg';

interface RegionProps {
  regionText: string;
}

export const Region = ({ regionText }: RegionProps) => {
  return (
    <div className={`textBody ${styles.region}`}>
      <div className={styles.location}>
        <img src={Location} alt="Location-outlined" />
      </div>
      {regionText}
    </div>
  );
};
