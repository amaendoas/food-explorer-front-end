import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";

export function AddDish() {

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  function handleAddIngredient() {
    if(newIngredient === '') {
      setShowWarning(true)
      return
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }


  return (
    <Theme>
      <C.Container>
        <Back/>
        <h2>Adicionar prato</h2>
        <C.Content>
          <div className="inputs-container">
            <Input type="file" title="Imagem do Prato" placeholder="Selecione a imagem"/>
            <Input type="text" title="Nome" placeholder="Ex: Sala Ceasar"/>
          </div>
          <div className="inputs-container">
            <div className="input-wrapper">
              <label htmlFor="ingredients">Ingredients</label>
              <div className="ingredients-wrapper">
                <IngredientItem
                isNew
                placeholder="Novo ingrediente"
                value={newIngredient}
                onChange={(e) => {
                  setShowWarning(false)
                  setNewIngredient(e.target.value)
                }}
                onClick={handleAddIngredient}
                />
                {
                  ingredients.map((ingredient, index) => {
                    return (
                      <IngredientItem
                      key={index}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    )
                  })
                }
              </div>
              {
                showWarning &&
                <p className="warning">Adicione um nome ao novo ingrediente</p>
              }
            </div>
            <Input title="Preço" type="text" placeholder="R$ 00,00"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" cols="30" rows="10"></textarea>
          </div>
          <button className="add-btn">Adicionar prato</button>
        </C.Content>
      </C.Container>
    </Theme>
  )
}