import * as C from "./styles";
import { Theme } from "../../components/Theme";
import homeImg from "../../assets/home-img.svg";
import { FoodItem } from "../../components/FoodItem";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useFavs } from "../../contexts/favs";
import { Loading } from "../../components/Loading"

export function Home() {
  const [dishes, setDishes] = useState([]);
  const { user, showLoading } = useAuth();

  function filterDishes(category) {
    return dishes.filter((item) => item.category === category)
  }
  
  useEffect(() => {
    async function getDishes() {
      try {
        const response = await api.get('/dishes')
        setDishes(response.data)
      } catch(error) {
        console.error(error.message)
      }
    }
    getDishes()
  }, [dishes])

  return (
    <Theme>
      <h2>Olá, {user.name}</h2>
        <C.Hero>
          <img src={homeImg} alt="" />
          <div className="home-text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingrediente selecionados</p>
          </div>
        </C.Hero>
        <C.Section>
          <h1>Pratos principais</h1>
          <div className="carrousel">
          {
            filterDishes('main').length === 0 ? <p className="default-msg">Nenhum prato principal cadastrado.</p> :filterDishes('main').map(dish => 
              (
                <FoodItem
                key={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                dishId={dish.id}
                />
              )
              )
            }
          </div>
        </C.Section>
        <C.Section>
          <h1>Sobremesas</h1>
          <div className="carrousel">
          {
            filterDishes('dessert').length === 0 ? <p className="default-msg">Nenhuma sobremesa cadastrada.</p> :filterDishes('dessert').map(dish => (
              <FoodItem
              key={dish.id}
              img={dish.img}
              title={dish.name}
              description={dish.description}
              price={dish.price}
              dishId={dish.id}
              />
            ))
          }
          </div>
        </C.Section>
        <C.Section>
          <h1>Bebidas</h1>
          <div className="carrousel">
          {
            filterDishes('drink').length === 0 ? <p className="default-msg">Nenhuma bebida cadastrada.</p> : filterDishes('drink').map(dish => (
              <FoodItem
              key={dish.id}
              img={dish.img}
              title={dish.name}
              description={dish.description}
              price={dish.price}
              dishId={dish.id}
              />
            ))
          }
          </div>
        </C.Section>
        {
          showLoading &&
        <Loading/>
        }
    </Theme>
  )
}