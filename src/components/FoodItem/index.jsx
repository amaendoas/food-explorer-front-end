import * as C from "./styles"
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io"
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import { Button } from "../Button"

export function FoodItem({img, title, description, price}) {
  return (
    <C.Container>
      <IoMdHeartEmpty size={30} className="heart"/>
      <img src={img} alt={`imagem de ${title}`} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>R$ {price}</p>
      <C.Count>
      <AiOutlineMinus/> 01 <AiOutlinePlus/>
      <Button title="Incluir"/>
      </C.Count>
    </C.Container>
  )
}