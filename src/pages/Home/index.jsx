import * as C from "./styles";
import { Theme } from "../../components/Theme";
import homeImg from "../../assets/home-img.svg";
import { FoodItem } from "../../components/FoodItem";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [dishes, setDishes] = useState([]);

  function filterDishes(category) {
    return dishes.filter((item) => item.category === category)
  }
  
  useEffect(() => {
    async function getDishes() {
      const response = await api.get('/dishes')
      setDishes(response.data)
    }
    getDishes()
  }, [dishes])

  return (
    <Theme>
        <C.Hero>
          <img src={homeImg} alt="" />
          <div className="home-text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingrediente selecionados</p>
          </div>
        </C.Hero>
        <C.Section>
          <h1>Pratos principais</h1>
          {
            filterDishes('main').length === 0 ? <p className="default-msg">Nenhum prato principal cadastrado.</p> :filterDishes('main').map(dish => 
              (
                <FoodItem
                key={dish.id}
                img={dish.img}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                dishId={dish.id}
                />
              )
            )
          }
        </C.Section>
        <C.Section>
          <h1>Sobremesas</h1>
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
        </C.Section>
        <C.Section>
          <h1>Bebidas</h1>
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
        </C.Section>
    </Theme>
  )
}