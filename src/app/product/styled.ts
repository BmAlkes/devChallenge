import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;
  background-color: var(--bg-primary);
  min-height: 100vh;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;

    img {
      max-width: 640px;
      width: 50%;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        background: #115d8c;
        mix-blend-mode: multiply;
        border-radius: 4px;
        border: none;
        height: 44px;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #f5f5fa;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        cursor: pointer;
        text-transform: uppercase;

        > svg {
          fill: #f5f5fa !important;
        }
      }
    }
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

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }
  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: var(--shape-dark);
    margin-bottom: 12px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
  }

  div {
    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
      margin-top: 32px;
    }
    p {
      margin-top: 32px;
      font-weight: 400;
      font-size: 14px;
      color: var(--text-dark);
      line-height: 250%;
    }
  }
`;
