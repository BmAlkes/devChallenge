"use client";
import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";

export const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});
export const TagHeader = styled.header`
  max-width: 1200;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  @media (max-width: 767px) {
    padding: 10px 15px;
    justify-content: flex-start;

    div {
      gap: 5px;
      justify-content: flex-start;
    }
  }
`;

export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
