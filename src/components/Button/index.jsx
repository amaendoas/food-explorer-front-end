import * as C from "./styles"

export function Button({title, count, icon: Icon, disabled, ...rest}) {
  return(
    <C.Container {...rest} disabled={disabled}>
    {Icon && <Icon className="btn-icon" />} {title} {count && ({count})}
    </C.Container>
  )
}