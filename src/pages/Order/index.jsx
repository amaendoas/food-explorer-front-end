import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { api } from "../../services/api";
import{ useState, useEffect } from "react"
import { useCart } from "../../hooks/cart"

export function Order() {
  const { cleanCart, cart, cartItems } = useCart();
  const [items, setItems] = useState([])


  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"))
    setItems(getItems ? getItems : [])
  }, [cart, cartItems])
  
  return (
    <Theme>
      <C.Container>
        <C.Cart>
          <C.Header>
            <h1>Meu pedido</h1>
            <Button title="Limpar Carrinho" onClick={cleanCart}/>
          </C.Header>
          <C.Content>
            {
              items.length === 0 ? <h3>Seu carrinho está vazio</h3> : items.map(item => {
                return (
                  <CartItem quant={item.quant} name={item.dish.name} price={item.dish.price}/>
                )
              }
              )
            }
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