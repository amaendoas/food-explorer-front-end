import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { BsSearch } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { BsReceipt } from "react-icons/bs"

export function Header() {
  return(
    <C.Container>
      <img src={logo} alt="logo" />
      <Link to="/">
        Meus Favoritos
      </Link>
      <C.Search>
        <BsSearch/>
        <input type="text" placeholder="Busque pelas opções de pratos" />
      </C.Search>
      <Button title="Meus pedidos" icon={BsReceipt}/>
      <button className="logout">
        <FiLogOut/>
      </button>
    </C.Container>
  )
}