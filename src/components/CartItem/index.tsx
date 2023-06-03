import { ProductInCart } from "@/@types/products";
import { Item, SelectQuantity } from "./styled";
import { ChangeEvent } from "react";
import DeleteIcon from "../Icons/deleteIcon";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDeleteItem(id: string): void;
}

const CartItem = ({
  product,
  handleUpdateQuantity,
  handleDeleteItem,
}: CartItemProps) => {
  const formatValue = (valueInCents: number) => {
    const valueInDollar = valueInCents / 100;
    return valueInDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };
  return (
    <Item>
      <img src={product.image_url} />
      <div>
        <div>
          <h4>{product.name}</h4>
          <button
            onClick={() => handleDeleteItem(product.id)}
            arial-label="delete"
          >
            <DeleteIcon />
          </button>
        </div>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatValue(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  );
};

export default CartItem;
