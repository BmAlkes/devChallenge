"use client";
import styled from "styled-components";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 10px 16px;
  @media (max-width: 767px) {
    width: 190px;
  }

  background: var(--bg-secondary);
  border-radius: 8px;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
  border: none;
`;
export const PrimaryInputSerch = styled.div`
  position: relative;
  width: 352px;
  @media (max-width: 767px) {
    width: 200px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
