import * as C from "./styles";
import { useEffect, useState } from "react";
import { Theme } from "../../components/Theme";
import { useFavs } from "../../contexts/favs"
import { api } from "../../services/api";
import { FoodItem } from "../../components/FoodItem";

export function Favs() {
  const { favsList } = useFavs();
  const [ favDishes, setFavDishes] = useState([]);
  
  function getFavsDishes() {
    let favDishesList = [];
    favsList.map(fav => {
      api.get(`/dishes/${fav.dish_id}`)
      .then((res) => {
        favDishesList.push(res.data)
        return favDishesList
      })
      .then((res) => setFavDishes(res))
      .catch((err) => console.error(err.message))
    }
    )
  }
  
  useEffect(() => {
    getFavsDishes()
  }, [favsList])
  return (
      <Theme>
        <C.Container>
          <h2>Favoritos</h2>
          <C.Content>
            {
              favsList.length === 0 ? <h3>Nenhum favorito cadastrado</h3> :
              favDishes.map(fav => (
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