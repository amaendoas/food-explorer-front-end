import * as C from "./styles"

export function Input({title, placeholder, type}){
  return(
    <C.Container>
      <label>{title}
      <input type={type} placeholder={placeholder}
      />
      </label>
    </C.Container>
  )
}