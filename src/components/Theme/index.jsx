
import { Alert } from "../Alert"
import { Footer } from "../Footer"
import { Header } from "../Header"
import * as C from "./styles"

export function Theme({children, search, alertMsg, alertSuccess}) {
  return(
    <>
    <C.Container>
      <Header search={search}/>
      <C.Content>
      <Alert msg={alertMsg} isSuccess={alertSuccess}/>
        {children}
      </C.Content>
      <Footer/>
    </C.Container>
    </>
  )
}