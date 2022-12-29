import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";
import { api } from "../../services/api";
import InputMask from "react-input-mask"
import { Select } from "../../components/Select";

export function AddDish() {

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const options = [
    { value: 'main', label: 'Pratos Principais'},
    { value: 'drinks', label: 'Bebidas'},
    { value: 'dessert', label: 'Sobremesas'}
  ]

  function handleSelectCategory(selectedOption) {
    setCategory(selectedOption.value)
  }

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
  
  function handlePrice(event) {
    const onlyDigits = event.target.value
      .split("")
      .filter(s => /\d/.test(s))
      .join("")
      .padStart(3, "0")
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
    event.target.value = maskCurrency(digitsFloat)
    const newPrice = event.target.value.replace(/[R\$]/g, '')
    setPrice(newPrice)
  }
  
  function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

  return (
    <Theme>
      <C.Container>
        <Back/>
        <h2>Adicionar prato</h2>
        <C.Content>
          <div className="inputs-container">
            <Input type="file" title="Imagem do Prato" placeholder="Selecione a imagem"/>
            <Input type="text" title="Nome" placeholder="Ex: Sala Ceasar" value={name} onChange={(e) => setName(e.target.value)}/>
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
            <Input title="Preço" isPrice type="text" onChange={handlePrice}/>
            <div className="category-wrapper">
              <label htmlFor="categoria">Categoria</label>
              <Select options={options} placeholder="Selecione uma categoria" onChange={handleSelectCategory}/>
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button className="add-btn">Adicionar prato</button>
        </C.Content>
      </C.Container>
    </Theme>
  )
}