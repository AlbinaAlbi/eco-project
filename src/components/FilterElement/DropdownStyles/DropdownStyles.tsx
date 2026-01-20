import { SetStateAction } from 'react';
import { Option } from '../FilterDropdown';
import styles from './DropdownStyles.module.scss';
import img from '../../../imgs/check.svg';
import { useAppSelector } from '../../../hooks/hooks';

interface DropdownStylesProps {
  onChange: (option: Option | null) => void;
  setOpen: (value: SetStateAction<boolean>) => void;
  options: Option[];
  placeholder: string;
  value: Option | null;
}

export const DropdownStyles = ({
  onChange,
  setOpen,
  options,
  placeholder,
  value,
}: DropdownStylesProps) => {
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <ul className={styles.dropdownStyles}>
      <li
        key="placeholder"
        className={styles.item}
        onClick={() => {
          onChange(null);
        }}
      >
        <span className={`${styles.box} ${value === null ? styles.active : ''}`}>
          {value === null && <img src={img} alt="Check dropdown" />}
        </span>
        {placeholder}
        <span className={styles.count}>{projects.length}</span>
      </li>

      {options.map((opt) => {
        const isActive = value?.value === opt.value;

        return (
          <li
            key={opt.value}
            className={`textBody ${styles.item}`}
            onClick={() => {
              onChange(opt);
            }}
          >
            <span className={`${styles.box} ${isActive ? styles.active : ''}`}>
              {isActive && <img src={img} alt="Check dropdown" />}
            </span>
            {opt.label}
            <span className={styles.count}>{opt.count}</span>
          </li>
        );
      })}
    </ul>
  );
};
