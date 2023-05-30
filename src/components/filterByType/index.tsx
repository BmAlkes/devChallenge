import { useContext } from "react";
import { FilterItem, FilterList } from "./styled";
import { FilterContext } from "@/context/filterContext";
import { FilterTypes } from "@/@types/filter-types";

const FilterByType = () => {
  const { type, setType } = useContext(FilterContext);

  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterTypes.All}
        onClick={() => handleChangeType(FilterTypes.All)}
      >
        All Products
      </FilterItem>
      <FilterItem
        selected={type === FilterTypes.TSHIRT}
        onClick={() => handleChangeType(FilterTypes.TSHIRT)}
      >
        {" "}
        T-shirts
      </FilterItem>
      <FilterItem
        selected={type === FilterTypes.MUG}
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        Mugs
      </FilterItem>
    </FilterList>
  );
};

export default FilterByType;
