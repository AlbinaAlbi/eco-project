import { Image } from '../../../Image';
import styles from './ImgAndStatus.module.scss';

interface ImgAndStatusProps {
  status: 'Active' | 'Inactive';
  url: string;
  title: string;
}

export const ImgAndStatus = ({ status, url, title }: ImgAndStatusProps) => {
  return (
    <div className={styles.container}>
      <span className={`textSecondary ${styles.status}`}>
        <div className={styles.ellipse}></div>
        {status}
      </span>
      <Image img={url} alt={title} />
    </div>
  );
};
