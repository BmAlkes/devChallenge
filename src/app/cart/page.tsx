"use client";
import { useRouter } from "next/navigation";
import { Backbutton, CartList, CartListContainer, Container } from "./styled";
import BackIcon from "@/components/Icons/backIcon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/@types/products";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };

  const calculeTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (acc, item) => (acc += item.price_in_cents * item.quantity),
      0
    );
  };
  const formatValue = (valueInCents: number) => {
    const valueInDollar = valueInCents / 100;
    return valueInDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const cartTotal = calculeTotal(value);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };
  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };
  return (
    <Container>
      <Backbutton onClick={handleNavigate}>
        <BackIcon />
        Back
      </Backbutton>
      <CartListContainer>
        <h3>Your Cart</h3>
        <p>
          Total {value.length} Products <span>{formatValue(cartTotal)}</span>
        </p>
        <CartList>
          {value.map((item) => {
            return (
              <CartItem
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })}
        </CartList>
      </CartListContainer>
    </Container>
  );
};

export default CartPage;
