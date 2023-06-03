import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 20px 40px;
  background-color: var(--bg-primary);
  min-height: 100vh;
  gap: 32px;

  @media (max-width: 769px) {
    flex-direction: column;
    padding: 10px 10px;
  }
`;

export const Backbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  border: none;
  color: #617480;
  cursor: pointer;
`;

export const CartListContainer = styled.div`
  margin-top: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 190%;
    text-transform: uppercase;
    color: (--text-dark2);
  }
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 500;
    }
  }
`;

export const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  width: 100%;
  width: 352px;
  padding: 16px 20px;

  h3 {
    font-weight: 600px;
    font-size: 20px;
    color: var(--text-dark2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  button {
    color: white;
    cursor: pointer;
    border-radius: 4px;
    background: #51b853;
    border: none;
    height: 34px;

    &:hover {
      background: #00b000;
    }
  }
`;

export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 400px;
  font-size: 16px;
  line-height: 200%;
  p {
    margin-bottom: 10px;
  }
  .total {
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  margin: 8px auto;
  padding: 0;
  background: var(--shapes);
`;
