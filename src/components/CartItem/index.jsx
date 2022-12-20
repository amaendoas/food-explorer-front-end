import * as C from "./styles"
import defaultImg from "../../assets/food-default.svg"

export function CartItem({img, quant, name, price}) {
  return (
    <C.Container>
      <img src={img ? img : defaultImg} alt="" />
      <C.Content>
        <p>
          <span>{quant}</span> x <span>{name}</span> <span>R${price}</span>
        </p>
        <button>Excluir</button>
      </C.Content>
    </C.Container>
  )
}