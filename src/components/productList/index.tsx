"use client";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

interface ProductListProps {}

const ProductList = (props: ProductListProps) => {
  const { data } = useProducts();
  console.log(data);
  return <div>ProductList</div>;
};

export default ProductList;
