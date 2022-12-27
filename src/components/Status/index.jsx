import * as C from "./styles"
import { GoPrimitiveDot } from "react-icons/go"

export function Status({ status = 'Pendente' }) {
  return(
    <C.Container>
      <GoPrimitiveDot style={
        {color: status === 'Preparando' ? '#FBA94C' : status === 'Entregue' ? '#04D361' : '#92000E'}}/> <p>{status}</p>
    </C.Container>
  )
}