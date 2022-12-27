import * as C from "./styles";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Theme } from "../../components/Theme";
import{ useState, useEffect } from "react";
import { useCart } from "../../contexts/cart";
import pixIcon from "../../assets/pix.svg";
import creditCardIcon from "../../assets/credit-card.svg";
import {MdAttachMoney, MdQrCode2, MdRemoveShoppingCart, MdCheckCircleOutline} from "react-icons/md"
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom"

export function Cart() {
  const navigate = useNavigate();
  const { cleanCart, cart, cartItems, setCart, setCartItems } = useCart();
  const [showLoading, setShowLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [payment, setPayment] = useState('waiting');
  const [isFinished, setIsfinished] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
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

  function newOrder() {
    setShowLoading(true)
    setTimeout(() => {
      setPayment('finished')
      setIsfinished(true)
      setCart(0)
      setCartItems([])
      setShowLoading(false)
    }, 2000)
  }


  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"))
    setItems(getItems ? getItems : [])
    totalCart()
  }, [cart, cartItems])
  
  return (
    <Theme>
      <C.Container>
        <C.Cart className={showPayment && 'hide'}>
          <div className="cart-header">
            <h2>Meu carrinho</h2>
            <Button title="Limpar Carrinho" onClick={cleanCart} disabled={isFinished || cart === 0 && 'disabled'}/>
          </div>
          <div className="cart-content">
            {
              items.length === 0 ?
                <div className="content">
                <MdRemoveShoppingCart/>
                <p>Seu Carrinho está vazio</p>
                <Button title="Adicione items" onClick={() => navigate("/")}/>
                </div>
                :
                items.map(item => {
                return (
                  <CartItem key={item.dish.id} quant={item.quant} name={item.dish.name} price={(totalPriceNumber(item.dish.price, item)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} id={item.dish.id}/>
                )
              }
              )
            }
          </div>
          <div className="cart-footer">
            <p>Total: <span>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span></p>
            <Button title="Ir para pagamento" onClick={() => {
              setShowPayment(!showPayment)
            }} disabled={cart === 0 && 'disabled'}/>
          </div>
        </C.Cart>

        <C.Payment className={showPayment && 'show'}>
          <h2>Pagamento</h2>
          <div className="container-payment">
            <div className="header-payment">
              <button className={payment === 'pix' && cart !== 0 ? 'title-payment selected': 'title-payment'} onClick={() => choosePayment('pix')} disabled={cart === 0 ? true : false}>
              <img src={pixIcon} alt="pix-icon" />
              <h3>PIX</h3>
              </button>
              <button className={payment === 'credit' && cart !== 0 ? 'title-payment selected': 'title-payment'} onClick={() => choosePayment('credit')} disabled={cart === 0 ? true : false}>
              <img src={creditCardIcon} alt="credit-card-icon" />
              <h3>Crédito</h3>
              </button>
            </div>
            <div className="content-payment">
              <div className={payment === 'waiting' && (!isFinished || cart === 0) ? 'waiting content': 'hide'}>
                <MdAttachMoney/>
                <p>Escolha uma forma de pagamento</p>
              </div>
              <div className={payment === 'pix' && cart !== 0 ? 'pix content': 'hide'}>
                <p>Escanei o Qr Code abaixo para fazer pagamento</p>
                <MdQrCode2/>
                <Button title="Pagar agora" onClick={newOrder}/>
              </div>
              <div className={payment === 'credit' && cart !== 0 ? 'credit content': 'hide'}>
                <form action="">
                    <Input id="card-number" placeholder="0000 0000 0000 0000" title="Número do cartão" type="number"/>
                    <div className="input-wrapper">
                      <Input placeholder="05/22" title="Validade" type="number"/>
                      <Input placeholder="123" title="CVC" type="number"/>
                    </div>
                </form>
              <Button title="Pagar agora" onClick={newOrder}/>
              </div>
              <div className={isFinished ? 'approved content' : 'hide'}>
                <MdCheckCircleOutline/>
                <p>Pagamento Aprovado!</p>
                <Button title="Ir para meus pedidos" onClick={() => navigate('/myorders')}/>
              </div>
                {showLoading && <Loading/>}
            </div>
          </div>
          <Button title="Voltar para o carrinho" className="btn-back-cart" onClick={() => {

            setShowPayment(!showPayment)
            }}/>
        </C.Payment>
      </C.Container>
    </Theme>
  )
}