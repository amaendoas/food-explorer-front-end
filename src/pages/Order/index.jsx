import * as C from "./styles";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Theme } from "../../components/Theme";
import{ useState, useEffect } from "react";
import { useCart } from "../../hooks/cart";
import emptyCart from "../../assets/emptyCart.svg";
import pixIcon from "../../assets/pix.svg"
import creditCardIcon from "../../assets/credit-card.svg"

export function Order() {
  const { cleanCart, cart, cartItems } = useCart();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [payment, setPayment] = useState('pix')

  function totalPriceNumber(price, item) {
    const newPrice = Number(price.replace(',','.'));
    return (item.quant * newPrice)
  }

  function totalCart() {
    let totalCartItems = 0;
    cartItems.forEach((item) => {
      totalCartItems += totalPriceNumber(item.dish.price, item)
    })
    setTotal(totalCartItems)
  }

  function choosePayment(statePayment) {
    setPayment(statePayment)
  }


  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"))
    setItems(getItems ? getItems : [])
    totalCart()
  }, [cart, cartItems])
  
  return (
    <Theme>
      <C.Container>
        <C.Cart>
          <C.Header>
            <h2>Meu pedido</h2>
            <Button title="Limpar Carrinho" onClick={cleanCart}/>
          </C.Header>
          <C.Content>
            {
              items.length === 0 ?
                <div className="empty-cart">
                <img src={emptyCart} alt="" /> 
                </div>: items.map(item => {
                return (
                  <CartItem key={item.dish.id} quant={item.quant} name={item.dish.name} price={(totalPriceNumber(item.dish.price, item)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} id={item.dish.id}/>
                )
              }
              )
            }
          </C.Content>

          <C.Footer>
            <p>Total: </p> <span>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
          </C.Footer>
        </C.Cart>

        <C.Payment>
          <h2>Pagamento</h2>
          <div className="container-payment">
            <div className="header-payment">
              <button className={payment === 'pix' ? 'title-payment selected': 'title-payment'} onClick={() => choosePayment('pix')}>
              <img src={pixIcon} alt="pix-icon" />
              <p>PIX</p>
              </button>
              <button className={payment === 'credito' ? 'title-payment selected': 'title-payment'} onClick={() => choosePayment('credito')}>
              <img src={creditCardIcon} alt="credit-card-icon" />
              <p>Crédito</p>
              </button>
            </div>
            <div className="content-payment">
              <div className={payment === 'pix' ? 'pix': 'hide'}>
                pix
                </div>
              <div className={payment === 'credito' ? 'credito': 'hide'}>credito</div>
              
            </div>
          </div>
        </C.Payment>
      </C.Container>
    </Theme>
  )
}