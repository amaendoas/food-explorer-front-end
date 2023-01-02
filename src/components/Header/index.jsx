import * as C from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { BsSearch, BsReceipt} from "react-icons/bs"
import {MdOutlineLogout, MdOutlineMenu, MdClear, MdAddCircleOutline, MdShoppingCart} from "react-icons/md"
import { useAuth } from "../../contexts/auth"
import { useState } from "react";
import { useCart } from "../../contexts/cart"
import { useNavigate } from "react-router-dom"
import { NotificationIcon } from "../NotificationIcon"

export function Header({search}) {
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
          <input type="text" placeholder="Busque pelas opções de pratos" onChange={(e) => search(e.target.value)} />
        </C.Search>

        <NotificationIcon quant={cart} icon={user.isAdmin ? BsReceipt : MdShoppingCart} onClick={() => {
          if(user.isAdmin) {
            navigate('/orders')
          } else {
            navigate("/cart")
          }
          }}/>
        <Button title={user.isAdmin ? "Novo Prato" : "Meus pedidos"} icon={user.isAdmin ? MdAddCircleOutline : BsReceipt} onClick={() => {
          if(user.isAdmin) {
            navigate('/add')
          } else {
            navigate('/orders')
          }
          }}/>
        <button className="logout" onClick={userSignOut}>
          <MdOutlineLogout/>
        </button>
      </C.Menu>
    </C.Container>
  )
}