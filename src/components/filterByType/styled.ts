import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}
export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 40px;
  cursor: pointer;
  /* @media (max-width: 767px) {
    gap: 15px;
    flex-direction: column;
  } */
`;

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
