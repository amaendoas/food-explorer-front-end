import * as C from "./styles"
import defaultImg from "../../assets/food-default.svg"
import { useEffect } from "react"
import { useCart } from "../../contexts/cart"

export function CartItem({img, quant, name, price, id}) {
  const { newCart, cartItems, setCartItems, cart, setCart } = useCart();

  function removeCartItem(id) {
    for (let index = 0; index < cartItems.length; index++) {
      if(cartItems[index].dish.id === id) {
        const newQuantCart = Number(cart) - Number(cartItems[index].quant) 
        setCart(newQuantCart)
        cartItems.splice(index, 1)
      }
    }
  }

  useEffect(() => {
    newCart()
  }, [cartItems, cart])
  return (
    <C.Container>
      <img src={img ? img : defaultImg} alt="" />
      <C.Content>
        <p>
          <span>{quant}</span> x <span>{name}</span> <span>{price}</span>
        </p>
        <button onClick={() => removeCartItem(id)}>Excluir</button>
      </C.Content>
    </C.Container>
  )
}