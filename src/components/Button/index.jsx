import * as C from "./styles"

export function Button({title, count, icon: Icon}) {
  return(
    <C.Container>
    {Icon && <Icon size={18}/>} {title} {count && ({count})}
    </C.Container>
  )
}