import type { FC } from "react";
import Button from "../button";

interface SearchFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "All Features" },
  { id: "data", label: "Data Processing" },
  { id: "ui", label: "User Interface" },
  { id: "performance", label: "Performance" },
  { id: "accessibility", label: "Accessibility" },
];

const SearchFilters: FC<SearchFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "primary" : "none"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="filter-btn"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default SearchFilters;
