"use client";

import FilterByPriority from "../filter-by-priority";
import FilterByType from "../filterByType";
import { FilterContainer } from "./styled";

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
};

export default FilterBar;
