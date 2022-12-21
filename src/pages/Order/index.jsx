import * as C from "./styles";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Theme } from "../../components/Theme";
import{ useState, useEffect } from "react";
import { useCart } from "../../hooks/cart";
import emptyCart from "../../assets/emptyCart.svg"

export function Order() {
  const { cleanCart, cart, cartItems } = useCart();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);

  function totalPriceNumber(price, item) {
    const newPrice = Number(price.replace(',','.'));
    return (item.quant * newPrice)
  }

  function totalCart() {
    let totalCartItems = 0;
    cartItems.forEach((item) => {
      totalCartItems += totalPriceNumber(item.dish.price, item)
    })
    setTotal(totalCartItems)
  }


  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"))
    setItems(getItems ? getItems : [])
    totalCart()
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
              items.length === 0 ?
                <div className="empty-cart">
                <img src={emptyCart} alt="" /> 
                </div>: items.map(item => {
                return (
                  <CartItem key={item.dish.id} quant={item.quant} name={item.dish.name} price={(totalPriceNumber(item.dish.price, item)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} id={item.dish.id}/>
                )
              }
              )
            }
          </C.Content>

          <C.Footer>
            <p>Total: </p> <span>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
          </C.Footer>
        </C.Cart>

        <C.Payment>
          <h1>Pagamento</h1>
        </C.Payment>
      </C.Container>
    </Theme>
  )
}