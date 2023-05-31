"use client";
import { useProducts } from "@/hooks/useProducts";
import React from "react";
import { Card } from "../ProductCard/styled";
import ProductCard from "../ProductCard";
import { ListContainer } from "./styled";

interface ProductListProps {}

const ProductList = (props: ProductListProps) => {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
          key={product.id}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
