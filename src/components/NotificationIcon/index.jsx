import * as C from "./styles"

export function NotificationIcon({quant, icon: Icon, ...rest}) {
  return (
    <C.Container {...rest}>
      {Icon && <Icon/>}
      {
      quant !== 0 && <p>{quant}</p>
      }
    </C.Container>
  )
}