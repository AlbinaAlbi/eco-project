import { Image } from '../../../Image';
import styles from './ImgCard.module.scss';

interface ImgCardProps {
  url: string;
  title: string;
}

export const ImgCard = ({ url, title }: ImgCardProps) => {
  return (
    <div className={styles.container}>
      <Image img={url} alt={title} />
    </div>
  );
};
