import * as C from "./styles"

export function Button({title, count = 0, icon: Icon}) {
  return(
    <C.Container>
    {Icon && <Icon size={18}/>} {title} ({count})
    </C.Container>
  )
}