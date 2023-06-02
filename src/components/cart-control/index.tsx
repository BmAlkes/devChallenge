import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "../Icons/cart-icon";
import { CartCount, Container } from "./styles";
import { useRouter } from "next/navigation";

const CartControl = () => {
  const router = useRouter();
  const handleCart = () => {
    router.push("/cart");
  };
  const { value } = useLocalStorage("cart-items", []);
  return (
    <Container onClick={handleCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
};

export default CartControl;
