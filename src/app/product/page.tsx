"use client";
import React from "react";
import { Backbutton, Container, ProductInfo } from "./styled";
import BackIcon from "@/components/Icons/backIcon";
import { useRouter } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import CartIcon from "@/components/Icons/cart-icon";

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  const formatValue = (valueInCents: number) => {
    const valueInDollar = valueInCents / 100;
    return valueInDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  const { data } = useProduct("d98efc70-c2fc-47e1-9be1-fced643e331b");
  return (
    <Container>
      <Backbutton onClick={handleNavigate}>
        <BackIcon />
        Back
      </Backbutton>
      <section>
        <img src={data?.image_url} />
        <div>
          <ProductInfo>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{formatValue(data?.price_in_cents ?? 0)}</span>
            <p>
              $40 shipping throughout Israel, and free on purchases over $100
            </p>
            <div>
              <h3>Description</h3>
              <p>{data?.description}</p>
            </div>
          </ProductInfo>
          <button>
            <CartIcon />
            Add to Cart
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Product;
