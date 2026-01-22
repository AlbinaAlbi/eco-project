import { SetStateAction } from 'react';
import styles from './DropdownStyles.module.scss';
import img from '../../../imgs/check.svg';
import { FilterOption } from '../../../hooks/useFilter';

interface DropdownStylesProps {
  onChange: (option: FilterOption | null) => void;
  setOpen: (value: SetStateAction<boolean>) => void;
  options: FilterOption[];
  placeholder: string;
  value: FilterOption | null;
  projectsLength: number;
}

export const DropdownStyles = ({
  onChange,
  setOpen,
  options,
  placeholder,
  value,
  projectsLength,
}: DropdownStylesProps) => {
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
        <span className={styles.count}>{projectsLength}</span>
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
