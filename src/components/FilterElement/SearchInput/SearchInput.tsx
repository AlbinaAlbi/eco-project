import { FilterItem } from '../../../hooks/useFilter';
import { SelectedFilters } from '../../../types/SelectedFilters';
import styles from './SearchInput.module.scss';
import vector from '../../../imgs/Vector.svg';

interface SearchInputProps {
  el: FilterItem;
  selectedFilters: SelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
}

export const SearchInput = ({ el, selectedFilters, setSelectedFilters }: SearchInputProps) => {
  return (
    <div className={`textBody ${styles.searchInput}`}>
      <label>{el.titleKey}</label>

      <div className={styles.inputWrapper}>
        <span className={styles.icon}>
          <img src={vector} alt="Search" />
        </span>

        <input
          type="text"
          className={`textBody ${styles.input}`}
          placeholder={el.descriptionKey}
          value={selectedFilters.search}
          onChange={(e) => setSelectedFilters((prev) => ({ ...prev, search: e.target.value }))}
        />
      </div>
    </div>
  );
};
