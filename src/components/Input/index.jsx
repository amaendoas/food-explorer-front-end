import * as C from "./styles"

export function Input({title, placeholder, type, ...rest}){
  return(
    <C.Container>
      <label>{title}
      <input type={type} placeholder={placeholder}
      {...rest}/>
      </label>
    </C.Container>
  )
}