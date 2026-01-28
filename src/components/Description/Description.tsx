import { useRenderText } from '../../hooks/renderText';
import styles from './Description.module.scss';

interface DescriptionProps {
  title: string[] | string;
  describtionColor?: string;
}

export const Description = ({ title, describtionColor }: DescriptionProps) => {
  const { renderText } = useRenderText();

  return (
    <div
      className={`textBody ${styles.container}`}
      style={{ color: describtionColor ? describtionColor : '' }}
    >
      {renderText(title)}
    </div>
  );
};
