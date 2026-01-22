import { useAppSelector } from '../../hooks/hooks';
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
  const { projects } = useAppSelector((state) => state.projects);

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

        const valueKeyMap: Record<string, keyof SelectedFilters> = {
          category: 'category',
          location: 'location',
          status: 'status',
        };

        const valueKey = valueKeyMap[el.category];

        const currentValue =
          el.options?.find((opt) => opt.value === selectedFilters[valueKey]) ?? null;

        return (
          <FilterDropdown
            key={el.id}
            title={el.titleKey}
            placeholder={el.descriptionKey}
            options={
              el.options
                ? el.options.map((opt) => {
                    return {
                      label: opt.label,
                      count: opt.count,
                      value: opt.value,
                    };
                  })
                : []
            }
            value={currentValue}
            onChange={(opt) =>
              setSelectedFilters((prev) => ({
                ...prev,
                [valueKey]: opt?.value || null,
              }))
            }
            projectsLength={projects.length}
          />
        );
      })}
    </div>
  );
};
