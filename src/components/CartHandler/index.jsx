import * as C from "./styles"
import { useState } from "react";
import { MdAdd, MdRemove} from "react-icons/md";
import { Button } from "../Button";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";

export function CartHandler({dish, icon, className}) {
  const [count, setCount] = useState(1);
  const { user } = useAuth();
  const { cart, setCart, newCart, setCartItems } = useCart();
    
  const items = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"));

  function plusCount() {
    return setCount(prevState => prevState + 1)
  }

  function minusCount() {
    if(count === 1) {
      return
    }
    return setCount(prevState => prevState - 1)
  }

  function handleCart() {
    try {
      setCount(1)
      setCart(prevState => prevState + count);
        let cartDish = {quant: count, dish}
        for (let index = 0; index < items.length; index++) {
          if(cartDish.dish.id === items[index].dish.id ) {
            const newQuant = items[index].quant + count
            items.splice(index, 1)
            cartDish = { quant: newQuant, dish}
          }
        }
        items.push(cartDish)
        setCartItems(items)
        alert('Adicionado ao Carrinho!')
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        console.error(error.message)
      }
    }
  }
  return (
    <C.Container className={className}>
      <button onClick={minusCount}><MdRemove/></button>
        <span>{
          count >= 10 ? count : '0' + count
        }</span>
      <button onClick={plusCount}><MdAdd/></button>
      <Button icon={icon} title="Incluir" onClick={handleCart} disabled={user.isAdmin ? 'disabled' : false}/>
    </C.Container>
    
  )
}