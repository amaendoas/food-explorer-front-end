import * as C from "./styles"
import { Back } from "../../components/Back"
import { useParams } from "react-router-dom"
import { Theme } from "../../components/Theme";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FoodItem } from "../../components/FoodItem";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading";

export function Details() {
  const [dish, setDish] = useState(null);
  const { showLoading, setShowLoading} = useAuth()
  const params = useParams();

  console.log(dish)

  async function getDishes() {
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

  useEffect(() => {
    getDishes()
  }, [])
  return(
    <Theme>
      <C.Container>
        <Back/>
        {
          dish &&
        <FoodItem
        title={dish.name}
        description={dish.description}
        dishId={dish.id}
        price={dish.price}
        />
        }
        {
        showLoading &&
        <Loading/>
        }
      </C.Container>
    </Theme>
  )
}