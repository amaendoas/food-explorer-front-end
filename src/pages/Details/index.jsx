import * as C from "./styles"
import { Back } from "../../components/Back"
import { useParams } from "react-router-dom"
import { Theme } from "../../components/Theme";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading";
import { CartHandler } from "../../components/CartHandler";
import foodImg from "../../assets/food-default.svg"
import { Ingredient } from "../../components/Ingredient";
import { useCart } from "../../contexts/cart";

export function Details() {
  const [dish, setDish] = useState(null);
  const { showLoading, setShowLoading} = useAuth();
  const [ingredients, setIngredients] = useState([]);
  const { newCart, cart } = useCart()
  const params = useParams();

  async function getDish() {
    setShowLoading(true)
    try {
      setShowLoading(false)
      const { data } = await api.get(`/dishes/${params.id}`)
      setDish(data)
    } catch(error) {
      setShowLoading(false)
      console.error(error.message)
    }
  }

  async function getIngredients() {
    try {
      const { data } = await api.get(`/ingredients/${params.id}`)
      setIngredients(data)
    } catch(error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getDish()
    getIngredients()
    newCart()
  }, [cart])
  return(
    <Theme>
      <Back/>
        {
          dish &&
        <C.Container>
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