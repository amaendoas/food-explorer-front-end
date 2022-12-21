import * as C from "./styles";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import foodImg from "../../assets/food-default.svg"
import { api } from "../../services/api";

export function FoodItem({img, title, description, price, dishId}) {
  const [count, setCount] = useState(1);
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cart, setCart, newCart, setCartItems } = useCart();
  const [ dish, setDish ] = useState();
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

  useEffect(() => {
    async function getDish() {
      const { data } = await api.get(`/dishes/${dishId}`)
      setDish(data)
    }
    getDish()
    newCart()
  }, [cart])
  
  
  return (
    <C.Container id={`d${dishId}`}>
      {
         user.isAdmin ? 
         <button className="edit-btn" onClick={() => navigate("/edit")}>
           <TbEdit/>
         </button> : <button onClick={() => setFav(!fav)} className="fav-btn">
        {
          fav ? <IoMdHeart className="red-heart"/> : <IoMdHeartEmpty/>
        }
      </button>
      }
      <img src={img ? img : foodImg} alt={`imagem de ${title}`} />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <p className="price">R$ {price}</p>
      <C.Count>
        <button onClick={minusCount}><AiOutlineMinus/></button>
        <span>{
          count >= 10 ? count : '0' + count
        }</span>
        <button onClick={plusCount}><AiOutlinePlus/></button>
      <Button title="Incluir" onClick={handleCart}/>
      </C.Count>
    </C.Container>
  )
}