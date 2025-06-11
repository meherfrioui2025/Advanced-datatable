import { type FC } from "react";

import Input from "../input";
import SearchFilters from "../search-filters";

interface SearchAndFilterBarProps {
  setSearch: (value: string) => void;
  search: string;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
}

const SearchAndFilterBar: FC<SearchAndFilterBarProps> = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="relative flex items-center">
            <span className="mdi mdi-search-web absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-2xl" />
            <Input
              type="text"
              placeholder="Search features (e.g., sorting, filtering, pagination...)"
              className="pl-10 outline-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <SearchFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
