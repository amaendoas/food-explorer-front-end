import * as C from "./styles";
import { useEffect, useState } from "react";
import { Theme } from "../../components/Theme";
import { useFavs } from "../../contexts/favs";
import { api } from "../../services/api";
import { FoodItem } from "../../components/FoodItem";
import { Back } from "../../components/Back";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading"

export function Favs() {
  const { favsList } = useFavs();
  const { setShowLoading, showLoading, setAlertMsg, setSuccess} = useAuth()
  const [ favDishes, setFavDishes] = useState([]);

  function getFavsDishes() {
    setShowLoading(true)
    setFavDishes([])
    favsList.map(fav => {
      api.get(`/dishes/${fav.dish_id}`)
      .then((res) => {
        setFavDishes(prevState => [...prevState, res.data])
        setShowLoading(false)
      })
      .catch((error) => {
        setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível listar os favoritos')
        setSuccess(false)
      }
      })
    }
    )
  }
  
  useEffect(() => {
    getFavsDishes()
  }, [favsList])
  return (
      <Theme>
        { showLoading && <Loading/> }
        <Back/>
        <C.Container>
          <h2>Favoritos</h2>
          <C.Content>
            {
              favsList.length === 0 ? <h3>Nenhum favorito cadastrado</h3> :

                  favDishes.map((fav, index) => (
                    <FoodItem
                    key={fav.id}
                    dish={fav}
                    />
                  )
                )
            }
          </C.Content>
        </C.Container>
      </Theme>
  )
}