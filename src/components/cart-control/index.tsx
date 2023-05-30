import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "../Icons/cart-icon";
import { CartCount, Container } from "./styles";

const CartControl = () => {
  const { value } = useLocalStorage("cart-items");
  console.log(value.length);
  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
};

export default CartControl;
