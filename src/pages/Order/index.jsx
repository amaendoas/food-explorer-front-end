import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { api } from "../../services/api";
import{ useState, useEffect } from "react"
import { useCart } from "../../hooks/cart"

export function Order() {
  const { cleanCart, cart, cartItems } = useCart();
  const [ dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getDishes() {
      const response = await api.get('/dishes')
      setDishes(response.data)
    }
    getDishes()
  }, [cart])
  
  return (
    <Theme>
      <C.Container>
        <C.Cart>
          <C.Header>
            <h1>Meu pedido</h1>
            <Button title="Limpar Carrinho" onClick={cleanCart}/>
          </C.Header>
          <C.Content>
            <h3>Seu carrinho está vazio</h3>
            {/* <CartItem quant="10" name="Expresso" price="20,50"/> */}
          </C.Content>

          <C.Footer>
            <p>Total: </p> <span>R$</span>
          </C.Footer>
        </C.Cart>

        <C.Payment>
          <h1>Pagamento</h1>
        </C.Payment>
      </C.Container>
    </Theme>
  )
}