import { Button } from "../../components/Button";
import { Theme } from "../../components/Theme";
import { useCart } from "../../hooks/cart";
import * as C from "./styles";

export function Order() {
  const { cleanCart } = useCart();
  
  return (
    <Theme>
      <C.Container>
        <h1>Meu pedido</h1>
        
        <Button title="Limpar Carrinho" onClick={cleanCart}/>
      </C.Container>
    </Theme>
  )
}