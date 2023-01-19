import * as C from "./styles"
import { GoPrimitiveDot } from "react-icons/go"

export function Status({ status = 'pendente' }) {
  return(
    <C.Container>
      <GoPrimitiveDot style={
        {color: status === 'preparando' ? '#FBA94C' : status === 'entregue' ? '#04D361' : '#92000E'}}/> <p>{status}</p>
    </C.Container>
  )
}