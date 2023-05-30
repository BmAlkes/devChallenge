"use client";
import CartControl from "../cart-control";
import { Input } from "../primary-input";
import { Logo, TagHeader, sairaStencil } from "./styled";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <Input />
        <CartControl />
      </div>
    </TagHeader>
  );
};
