import React from "react";
import { Card } from "./styled";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = (props: CardProps) => {
  const formatValue = (valueInCents: number) => {
    const valueInDollar = valueInCents / 100;
    return valueInDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const price = formatValue(props.price);
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
