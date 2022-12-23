import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { BsSearch, BsReceipt} from "react-icons/bs"
import {MdOutlineLogout, MdOutlineMenu, MdClear} from "react-icons/md"
import { useAuth } from "../../contexts/auth"
import { useState } from "react";
import { useCart } from "../../contexts/cart"
import { useNavigate } from "react-router-dom"
import { CartIcon } from "../CartIcon"

export function Header() {
  const { signOut, user } = useAuth();
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
        show && <div className="overlay" onClick={() => {setShow(!show)}}></div> 
      }
      <button className="button-menu" onClick={() => {
        setShow(!show)
        document.body.classList.toggle('suppress-scroll')
        }}>
        {show ? <MdClear/> : <MdOutlineMenu/>}
      </button>
      <C.Menu className={`${show ? "show": "hide"}`}>
        {
          !user.isAdmin && <Link to="/favs">Meus Favoritos</Link>
        }
        <C.Search>
          <BsSearch/>
          <input type="text" placeholder="Busque pelas opções de pratos" />
        </C.Search>
        {
          !user.isAdmin &&
          <CartIcon quant={cart} onClick={() => navigate("/cart")}/>
        }
        <Button title={user.isAdmin ? "Pedidos" : "Meus pedidos"} icon={BsReceipt} onClick={() => navigate('/orders')}/>
        <button className="logout" onClick={userSignOut}>
          <MdOutlineLogout/>
        </button>
      </C.Menu>
    </C.Container>
  )
}