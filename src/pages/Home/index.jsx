import * as C from "./styles";
import { Theme } from "../../components/Theme";
import homeImg from "../../assets/home-img.svg";
import { FoodItem } from "../../components/FoodItem";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading"
import { Alert } from "../../components/Alert";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const { user, showLoading, success, alertMsg, setAlertMsg, setSuccess } = useAuth();
  const [ search, setSearch ] = useState("");

  function filterDishes(category) {
    return dishes.filter((item) => item.category === category)
  }
  
  useEffect(() => {
    async function getDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`)
        setDishes(response.data)
      } catch(error) {
        if(error.response) {
          setAlertMsg(error.response.data.message)
          setSuccess(false)
        } else {
          setAlertMsg('Não foi possível exibir os pratos')
          setSuccess(false)
        }
      }
    }
    getDishes()
  }, [dishes])

  return (
    <Theme search={setSearch}>
      <C.Container>
        <Alert msg={alertMsg} isSuccess={success}/>
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
              filterDishes('main').length === 0 ? <p className="default-msg">Nenhum prato principal encontrado.</p> :filterDishes('main').map(dish => 
                (
                  <FoodItem
                  key={dish.id}
                  dish={dish}
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
              filterDishes('dessert').length === 0 ? <p className="default-msg">Nenhuma sobremesa encontrada.</p> :filterDishes('dessert').map(dish => (
                <FoodItem
                key={dish.id}
                dish={dish}
                />
              ))
            }
            </div>
          </C.Section>
          <C.Section>
            <h1>Bebidas</h1>
            <div className="carrousel">
            {
              filterDishes('drink').length === 0 ? <p className="default-msg">Nenhuma bebida encontrada.</p> : filterDishes('drink').map(dish => (
                <FoodItem
                key={dish.id}
                dish={dish}
                />
              ))
            }
            </div>
          </C.Section>
          {
            showLoading &&
          <Loading/>
          }
      </C.Container>
    </Theme>
  )
}