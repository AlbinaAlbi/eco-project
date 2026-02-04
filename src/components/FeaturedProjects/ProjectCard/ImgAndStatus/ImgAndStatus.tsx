import { Image } from '../../../Image';
import styles from './ImgAndStatus.module.scss';

interface ImgAndStatusProps {
  status: 'Active' | 'Inactive';
  url: string;
  title: string;
}

export const ImgAndStatus = ({ status, url, title }: ImgAndStatusProps) => {
  const isActive = status === 'Active';

  return (
    <div className={styles.container}>
      <span className={`textSecondary ${styles.status}`}>
        <div
          className={styles.ellipse}
          style={{ backgroundColor: isActive ? '#A4D65E' : '#FF0000' }}
        ></div>
        {status}
      </span>
      <Image img={url} alt={title} />
    </div>
  );
};
