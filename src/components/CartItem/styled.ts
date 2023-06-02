import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  border-radius: 8px;
  background-color: white;

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    color: var(--text-dark2);

    h4 {
      font-weight: 300;
      font-size: 20px;
      line-height: 150%;
    }
    button {
      background: transparent;
      border: none;
      svg {
        cursor: pointer;
      }
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`;

export const SelectQuantity = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--text-dark);
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-size: 16px;
  font-weight: 600;
`;
