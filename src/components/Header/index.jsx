import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { BsSearch, BsReceipt} from "react-icons/bs"
import { FiLogOut, FiMenu, FiX } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { useState } from "react";

export function Header() {
  const { signOut } = useAuth();
  const [show, setShow] = useState(false);

  return(
    <C.Container>
      <img src={logo} alt="logo" />
      {
        show && <div className="overlay"></div> 
      }
      <button className="button-menu" onClick={() => {
        setShow(!show)
        document.body.classList.toggle('suppress-scroll')
        }}>
        {show ? <FiX/> : <FiMenu/>}
      </button>
      <C.Menu className={`${show ? "show": "hide"}`}>
        <Link to="/">
          Meus Favoritos
        </Link>
        <C.Search>
          <BsSearch/>
          <input type="text" placeholder="Busque pelas opções de pratos" />
        </C.Search>
        <Button title="Meus pedidos" icon={BsReceipt}/>
        <button className="logout" onClick={signOut}>
          <FiLogOut/>
        </button>
      </C.Menu>
    </C.Container>
  )
}