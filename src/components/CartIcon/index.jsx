import * as C from "./styles"
import {MdShoppingCart} from "react-icons/md"

export function CartIcon({quant, ...rest}) {
  return (
    <C.Container {...rest}>
      <MdShoppingCart/>
      {
      quant !== 0 && <p>{quant}</p>
      }
    </C.Container>
  )
}