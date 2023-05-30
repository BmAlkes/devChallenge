import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    font-family: inherit;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: none;

    svg {
      margin-left: 16px;
    }
  }
`;

export const PriorityFilter = styled.ul`
  position: absolute;
  width: 180px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  list-style-type: none;
  top: 100%;
  right: 0;
  z-index: 999;

  li {
    padding: 5px 16px;
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      width: 100%;
    }
  }
  li + li {
    margin-top: 4px;
  }
`;
