import * as C from "./styles"

export function Button({title, count, icon: Icon, disabled, ...rest}) {
  return(
    <C.Container {...rest} disabled={disabled}>
    {Icon && <Icon size={18}/>} {title} {count && ({count})}
    </C.Container>
  )
}