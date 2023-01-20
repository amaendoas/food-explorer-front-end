import * as C from "./styles";
import { Theme } from "../../components/Theme";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";
import { api } from "../../services/api";
import { Select } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Alert } from "../../components/Alert";

export function AddDish() {

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const { success, alertMsg, setAlertMsg, setSuccess } = useAuth();

  const navigate = useNavigate();

  const options = [
    { value: 'main', label: 'Pratos Principais'},
    { value: 'drink', label: 'Bebidas'},
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
  
  function maskCurrency(value, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(value)
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    setFile(file)
  }

  function handleAddDish(par_file) {
    api.post('/dishes', {
      name,
      description,
      price,
      category,
      ingredients
    }).then((res) => {
      if(par_file !== null) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('image', par_file)
        api.patch(`/dishes/image/${res.data[0].id}`, fileUploadForm).then(() => {
          setAlertMsg('Prato adicionado com sucesso!')
          setSuccess(true)
          navigate('/')
        }).catch((error) => {
          if(error.response) {
            setAlertMsg(error.response.data.message)
            setSuccess(false)
          } else {
            setAlertMsg('Não foi possível adicionar este prato')
          }
        })
      } else {
        setAlertMsg('Prato adicionado com sucesso!')
        setSuccess(true)
        navigate('/')
        return
      }
    }).catch((error) => {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setSuccess(false)
        setAlertMsg('Não foi possível adicionar este prato')
      }
    })
  }
  return (
    <Theme>
      <C.Container>
      <Alert msg={alertMsg} isSuccess={success}/>
        <Back/>
        <h2>Adicionar prato</h2>
        <C.Content>
          <div className="inputs-container">
            <Input type="file" title="Imagem do Prato" placeholder="Selecione a imagem" imgDish={file} onChange={handleAddImage}/>
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
            <Input title="Preço" type="text" className="price" onChange={handlePrice}/>
            <div className="category-wrapper">
              <label htmlFor="categoria">Categoria</label>
              <Select options={options} placeholder="Selecione uma categoria" onChange={handleSelectCategory}/>
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button className="add-btn" onClick={() => handleAddDish(file)}>Adicionar prato</button>
        </C.Content>
      </C.Container>
    </Theme>
  )
}