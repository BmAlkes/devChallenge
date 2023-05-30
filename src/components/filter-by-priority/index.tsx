import React, { useContext, useState } from "react";
import { Container, PriorityFilter } from "./styled";
import ArrowIcon from "../Icons/arrowIcon";
import { FilterContext } from "@/context/filterContext";
import { PriorityTypes } from "@/@types/priority-types";

const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useContext(FilterContext);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };
  return (
    <Container>
      <button onClick={handleOpen}>
        Organize by <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>News</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Price: Low to High
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.HIGH_PRICE)}>
            Price: High to Low
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Best Sellers
          </li>
        </PriorityFilter>
      )}
    </Container>
  );
};

export default FilterByPriority;
