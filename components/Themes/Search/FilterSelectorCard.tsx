import { LabelledInput } from "@components/Primitives";
import { FilterDropdown, OrderDropdown, TypeDropdown, TypeOptions } from ".";

export function FilterSelectorCard({
  filterOpts = ["ERROR"],
  orderOpts = ["ERROR"],
  showFiltersWithZero = false,
  searchValue = "",
  onFilterChange,
  onOrderChange,
  onSearchChange,
  typeOptions,
  typeValue,
  onTypeChange,
  filterValue,
  orderValue,
  searchOnly = false,
}: {
  filterOpts?: string[];
  filterValue: string;
  showFiltersWithZero?: boolean;
  orderOpts?: string[];
  orderValue: string;
  searchValue: string;
  typeOptions: TypeOptions;
  typeValue?: string | undefined;
  onFilterChange?: (e: any) => void;
  onOrderChange?: (e: any) => void;
  onSearchChange?: (e: any) => any;
  onTypeChange?: (e: any) => void;
  searchOnly?: boolean;
}) {
  return (
    <>
      <div className="relative flex w-full max-w-7xl flex-col gap-4 py-4 lg:flex-row">
        <LabelledInput
          label="Search"
          debounce
          value={searchValue}
          onValueChange={(e) => onSearchChange && onSearchChange(e)}
        />
        {typeOptions !== undefined && (
          <TypeDropdown
            typeValue={typeValue}
            onTypeChange={onTypeChange}
            typeOptions={typeOptions}
          />
        )}
        {!searchOnly && (
          <>
            <FilterDropdown
              {...{
                filterValue,
                filterOpts,
                onFilterChange,
                showFiltersWithZero,
                typeValue,
              }}
            />
            <OrderDropdown {...{ orderValue, onOrderChange, orderOpts }} />
          </>
        )}
      </div>
    </>
  );
}
