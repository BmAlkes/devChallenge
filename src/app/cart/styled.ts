import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;
  background-color: var(--bg-primary);
  min-height: 100vh;
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
