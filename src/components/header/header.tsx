"use client";
import { useContext } from "react";
import CartControl from "../cart-control";
import { Input } from "../primary-input";
import { Logo, TagHeader, sairaStencil } from "./styled";
import { FilterContext } from "@/context/filterContext";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const { search, setSearch } = useContext(FilterContext);
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <Input
          value={search}
          handleChange={setSearch}
          placeholder="Search for something specific?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
};
