import * as C from "./styles"
import { BackButton } from "../../components/BackButton"
import { useNavigate, useParams } from "react-router-dom"
import { Theme } from "../../components/Theme";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading";
import { CartHandler } from "../../components/CartHandler";
import foodImg from "../../assets/food-default.svg"
import { Ingredient } from "../../components/Ingredient";
import { useCart } from "../../contexts/cart";
import { Alert } from "../../components/Alert";
import {MdEdit} from "react-icons/md"

export function Details() {
  const [dish, setDish] = useState(null);
  const { user, showLoading, setShowLoading, success, alertMsg, setAlertMsg, setSuccess } = useAuth();
  const [ingredients, setIngredients] = useState([]);
  const { newCart, cart } = useCart();
  const navigate = useNavigate();
  const params = useParams();

  async function getDish() {
    setShowLoading(true)
    try {
      setShowLoading(false)
      const { data } = await api.get(`/dishes/${params.id}`)
      setDish(data)
    } catch(error) {
      setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível exibir esse prato')
        setSuccess(false)
      }
    }
  }

  async function getIngredients() {
    try {
      const { data } = await api.get(`/ingredients/${params.id}`)
      setIngredients(data)
    } catch(error) {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível exibir os ingredientes')
        setSuccess(false)
      }
    }
  }

  useEffect(() => {
    getDish()
    getIngredients()
    newCart()
  }, [cart])
  return(
    <Theme>
      <Alert msg={alertMsg} isSuccess={success}/>
      <BackButton/>
        {
          dish &&
          <C.Container>
          <C.Header>
          {user.isAdmin ?
          <button className="edit-btn" onClick={() => navigate(`/edit/${dish.id}`)}>
           <MdEdit size={30}/>
          </button>
          : <></>
          }
          </C.Header>
          <C.DishImg>
            <img src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : foodImg} alt="" />
          </C.DishImg>
          <C.Info>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            
            { ingredients &&
              <div className="ingredients-wrapper">
                { ingredients.map((ingredient, index) => {
                  return (
                    <Ingredient key={index} ingredient={ingredient}/>
                  )
                }) }
              </div>
            }
            <CartHandler dish={dish} className="count"/>

          </C.Info>
          {
          showLoading &&
          <Loading/>
          }
        </C.Container>
        }
    </Theme>
  )
}