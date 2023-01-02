
import { Footer } from "../Footer"
import { Header } from "../Header"
import * as C from "./styles"

export function Theme({children, search}) {
  return(
    <C.Container>
      <Header search={search}/>
      <C.Content>
        {children}
      </C.Content>
      <Footer/>
    </C.Container>
  )
}