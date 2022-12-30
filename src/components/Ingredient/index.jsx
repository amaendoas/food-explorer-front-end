import * as C from "./styles";
import foodImg from "../../assets/food-default.svg";
import lettuce from "../../assets/lettuce.png";
import plum from "../../assets/plum.png";
import naanBread from "../../assets/naan-bread.png";
import almond from "../../assets/almond.png";
import anise from "../../assets/anise.png";
import coffee from "../../assets/coffee-grains.png";
import shrimp from "../../assets/shrimp.png";
import cinnamon from "../../assets/cinnamon.png";
import eggWhite from "../../assets/egg.png";
import damascus from "../../assets/damascus.png";
import flour from "../../assets/flour.png";
import lemon from "../../assets/sicilian-lemon.png";
import apple from "../../assets/apple.png";
import passionFruit from "../../assets/passion-fruit.png";
import pasta from "../../assets/pasta.png";
import bread from "../../assets/bread.png";
import cucumber from "../../assets/cucumber.png";
import peach from "../../assets/peach.png";
import pesto from "../../assets/pesto.png";
import ham from "../../assets/ham.png";
import radish from "../../assets/radish.png";
import arugula from "../../assets/arugula.png";
import tomato from "../../assets/tomato.png";
import whisky from "../../assets/whisky.png"



export function Ingredient({ingredient}) {
  let currentIngredient = ingredient.name.toLowerCase()
  let ingredientImg;

  if(currentIngredient === "alface") {
    ingredientImg = lettuce;
  }
  else if (currentIngredient === "ameixa") {
    ingredientImg = plum;
  }
  else if(currentIngredient === "amêndoas") {
    ingredientImg = almond;
  }
  else if(currentIngredient === "aniz") {
    ingredientImg = anise;
  }
  else if(currentIngredient === "café") {
    ingredientImg = coffee;
  }
  else if(currentIngredient === "camarão") {
    ingredientImg = shrimp;
  }
  else if(currentIngredient === "canela") {
    ingredientImg = cinnamon;
  }
  else if(currentIngredient === "claras") {
    ingredientImg = eggWhite;
  }
  else if(currentIngredient === "damasco") {
    ingredientImg = damascus;
  }
  else if(currentIngredient === "farinha") {
    ingredientImg = flour;
  }
  else if(currentIngredient === "limão") {
    ingredientImg = lemon;
  }
  else if(currentIngredient === "maçã") {
    ingredientImg = apple;
  }
  else if(currentIngredient === "maracujá") {
    ingredientImg = passionFruit;
  }
  else if(currentIngredient === "massa") {
    ingredientImg = pasta;
  }
  else if(currentIngredient === "pão") {
    ingredientImg = bread;
  }
  else if(currentIngredient === "pão naan") {
   ingredientImg = naanBread;
 }
  else if(currentIngredient === "pepino") {
    ingredientImg = cucumber;
  }
  else if(currentIngredient === "pêssego") {
    ingredientImg = peach;
  }
  else if(currentIngredient === "pesto") {
    ingredientImg = pesto;
  }
  else if(currentIngredient === "presunto") {
    ingredientImg = ham;
  }
  else if(currentIngredient === "rabanete") {
    ingredientImg = radish;
  }
  else if(currentIngredient === "rúcula") {
    ingredientImg = arugula;
  }
  else if(currentIngredient === "tomate") {
    ingredientImg = tomato;
  }
  else if(currentIngredient === "whiskey" || "whisky") {
    ingredientImg = whisky;
  } else {
    ingredientImg = foodImg;
  }


  return (
    <C.Container>
      <img src={ingredientImg} alt="" />
      <p>{ingredient.name}</p>
    </C.Container>
  )
}