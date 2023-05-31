import React from "react";
import { Card } from "./styled";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  price: number;
  image: string;
  id: string;
}

const ProductCard = (props: CardProps) => {
  const router = useRouter();

  const formatValue = (valueInCents: number) => {
    const valueInDollar = valueInCents / 100;
    return valueInDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const price = formatValue(props.price);

  const handleNavigate = () => {
    router.push(`/product?id=${props.id}`);
  };
  return (
    <Card onClick={handleNavigate}>
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
