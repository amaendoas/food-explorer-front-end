import * as C from "./styles"

export function Button({title, count, icon: Icon, ...rest}) {
  return(
    <C.Container {...rest}>
    {Icon && <Icon size={18}/>} {title} {count && ({count})}
    </C.Container>
  )
}