
import { Footer } from "../Footer"
import { Header } from "../Header"
import * as C from "./styles"

export function Theme({children}) {
  return(
    <C.Container>
      <Header/>
      <C.Content>
        {children}
      </C.Content>
      <Footer/>
    </C.Container>
  )
}