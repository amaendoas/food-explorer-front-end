import * as C from "./styles"
import logo from "../../assets/logo-footer.svg"

export function Footer() {
  return (
    <C.Container>
      <img src={logo} alt="logo" />
      <p>&copy; 2022 - Todos os direitos reservados.</p>
    </C.Container>
  )
}