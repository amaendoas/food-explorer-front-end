import * as C from "./styles"
import { Theme } from "../../components/Theme"
import homeImg from "../../assets/home-img.svg"
import { FoodItem } from "../../components/FoodItem"
import coffee from "../../assets/coffee.png"

export function Home() {
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
          <FoodItem
          img={coffee}
          title="Expresso"
          description="Café cremoso feito na temperatura e pressões perfeitas"
          price="49,97"
          dishId="1"
          />
        </C.Section>
        <C.Section>
          <h1>Sobremesas</h1>
          <FoodItem
          img={coffee}
          title="Expresso"
          description="Café cremoso feito na temperatura e pressões perfeitas"
          price="49,97"
          dishId="2"
          />
        </C.Section>
        <C.Section>
          <h1>Bebidas</h1>
          <FoodItem
          img={coffee}
          title="Expresso"
          description="Café cremoso feito na temperatura e pressões perfeitas"
          price="49,97"
          />
        </C.Section>
    </Theme>
  )
}