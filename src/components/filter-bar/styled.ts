import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
