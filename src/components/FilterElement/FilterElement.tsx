import { useFilter } from '../../hooks/useFilter';
import { SelectedFilters } from '../../types/SelectedFilters';
import { FilterDropdown } from './FilterDropdown';
import styles from './FilterElement.module.scss';
import { SearchInput } from './SearchInput';

interface FilterElementProps {
  selectedFilters: SelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
}
export const FilterElement = ({ selectedFilters, setSelectedFilters }: FilterElementProps) => {
  const filterList = useFilter();

  return (
    <div className={`containerMaxWidth ${styles.container}`}>
      {filterList.map((el) => {
        if (el.category === 'search') {
          return (
            <SearchInput
              key={el.id}
              el={el}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          );
        }

        let valueKey: keyof SelectedFilters;
        if (el.category === 'category') valueKey = 'category';
        else if (el.category === 'location') valueKey = 'location';
        else valueKey = 'status';

        return (
          <FilterDropdown
            key={el.id}
            title={el.titleKey}
            placeholder={el.descriptionKey}
            options={
              el.options
                ? el.options.map((opt) => {
                    return {
                      label: `${opt.label}`,
                      count: `${opt.count}`,
                      value: opt.label,
                    };
                  })
                : []
            }
            value={
              selectedFilters[valueKey]
                ? { label: selectedFilters[valueKey]!, value: selectedFilters[valueKey]! }
                : null
            }
            onChange={(opt) =>
              setSelectedFilters((prev) => ({
                ...prev,
                [valueKey]: opt?.value || null,
              }))
            }
          />
        );
      })}
    </div>
  );
};
