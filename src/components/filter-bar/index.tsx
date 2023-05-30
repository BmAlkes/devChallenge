"use client";

import FilterByType from "../filterByType";
import { FilterContainer } from "./styled";

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  );
};

export default FilterBar;
