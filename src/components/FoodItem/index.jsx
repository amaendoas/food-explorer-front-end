import * as C from "./styles";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { useNavigate } from "react-router-dom";

export function FoodItem({img, title, description, price, dishId}) {
  const [count, setCount] = useState(1);
  const [fav, setFav] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { setOrder, newOrder } = useOrder();

  function plusCount() {
    return setCount(prevState => prevState + 1)
  }

  function minusCount() {
    if(count === 1) {
      return
    }
    return setCount(prevState => prevState - 1)
  }
  
  
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
      <img src={img} alt={`imagem de ${title}`} />
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <p className="price">R$ {price}</p>
      <C.Count>
        <button onClick={minusCount}><AiOutlineMinus/></button>
        <span>{
          count >= 10 ? count : '0' + count
        }</span>
        <button onClick={plusCount}><AiOutlinePlus/></button>
      <Button title="Incluir" onClick={() => {
        setOrder(prevState => prevState + count)
        newOrder()
        }}/>
      </C.Count>
    </C.Container>
  )
}