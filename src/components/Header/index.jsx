import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { BsSearch, BsReceipt} from "react-icons/bs"
import { FiLogOut, FiMenu, FiX } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { useState } from "react";
import { useCart } from "../../hooks/cart"
import { useNavigate } from "react-router-dom"

export function Header() {
  const { signOut } = useAuth();
  const [show, setShow] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  function userSignOut() {
    navigate('/')
    signOut()
  }

  return(
    <C.Container>
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
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
        <Link to="/favs">
          Meus Favoritos
        </Link>
        <C.Search>
          <BsSearch/>
          <input type="text" placeholder="Busque pelas opções de pratos" />
        </C.Search>
        <Button title={`Meu pedido (${cart})`} icon={BsReceipt} onClick={() => navigate("/order")}/>
        <button className="logout" onClick={userSignOut}>
          <FiLogOut/>
        </button>
      </C.Menu>
    </C.Container>
  )
}