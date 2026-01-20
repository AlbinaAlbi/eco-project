import { useEffect, useRef, useState } from 'react';
import styles from './FilterDropdown.module.scss';
import chevron from '../../../imgs/Chevron.svg';
import { DropdownStyles } from '../DropdownStyles';

export type Option = {
  label: string;
  count?: string;
  value: string;
};

type Props = {
  title: string;
  value: Option | null;
  options: Option[];
  placeholder: string;
  onChange: (option: Option | null) => void;
};

export const FilterDropdown = ({ title, value, options, placeholder, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', close);

    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={ref} className={`textBody ${styles.container}`}>
      <label>{title}</label>

      <div
        className={styles.dropdown}
        tabIndex={0}
        onClick={(e) => {
          if (open) {
            (e.currentTarget as HTMLDivElement).blur();
          }
          setOpen((o) => !o);
        }}
      >
        {value?.label || placeholder}
        <img src={chevron} alt="Chevron dropdown" />
      </div>

      {open && (
        <DropdownStyles
          onChange={onChange}
          setOpen={setOpen}
          options={options}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
};
