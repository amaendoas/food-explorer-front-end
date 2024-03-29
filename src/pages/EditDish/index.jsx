import * as C from "./styles"
import { Theme } from "../../components/Theme";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";
import { api } from "../../services/api";
import { Select } from "../../components/Select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading";
import { Alert } from "../../components/Alert";

export function EditDish() {
  const { showLoading, setShowLoading, success, alertMsg, setAlertMsg, setSuccess } = useAuth();

  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [newIngredient, setNewIngredient] = useState("");
  const [fileName, setFileName] = useState(null);
  const[dish, setDish] = useState('');

  const params = useParams();

  const navigate = useNavigate();

  async function getDish() {
    setShowLoading(true)
    try {
      setShowLoading(false)
      const { data } = await api.get(`/dishes/${params.id}`)
      setDish(data)
      setName(data.name)
      setPrice(data.price)
      setFileName(data.image)
      setDescription(data.description)
      if(dish.category === "main") {
        setCategory('Pratos principais')
      } else if(dish.category === "drink") {
        setCategory('Bebidas')
      } else {
        setCategory('Sobremesas')
      }
    } catch(error) {
      setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível carregar as informações')
        setSuccess(false)
      }
    }
  }

  async function getIngredients() {
    try {
      const { data } = await api.get(`/ingredients/${params.id}`)
      setIngredients(data.map(ingredient => ingredient.name))
    } catch(error) {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível carregar os ingredientes')
        setSuccess(false)
      }
    }
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

  function handleUpdateDish(par_file) {
    setShowLoading(true)
    try {
      api.put(`/dishes/${dish.id}`, {
        name,
        description,
        price,
        category,
        ingredients
      })

      if(par_file !== null) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('image', par_file)
        api.patch(`/dishes/image/${dish.id}`, fileUploadForm).then(() => {
          setShowLoading(false)
          setAlertMsg('Prato adicionado com sucesso!')
          setSuccess(true)
          navigate('/')
        }).catch((error) => {
          setShowLoading(false)
          if(error.response) {
            setAlertMsg(error.response.data.message)
            setSuccess(false)
          } else {
            setAlertMsg('Não foi possível fazer o update')
            setSuccess(false)
          }
        })
      } else {
        setShowLoading(false)
        setAlertMsg('Prato adicionado com sucesso!')
        setSuccess(true)
        navigate('/')
        return
      }   
    } catch(error) {
      setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível fazer o update')
        setSuccess(false)
      }
    }
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

  function handleDeleteDish() {
    setShowLoading(true)
    try {
      api.delete(`/dishes/${dish.id}`)
      setShowLoading(false)
      setAlertMsg('Prato deletado com sucesso!')
      setSuccess(true)
      navigate("/")
    } catch(error) {
      setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível excluir esse prato')
        setSuccess(false)
      }
    }
  }

  useEffect(() => {
    getDish()
    getIngredients()
  }, [])


  return (
    <Theme>
      <Alert msg={alertMsg} isSuccess={success}/>
      <BackButton/>
      <C.Container>
        <h2>Editar prato</h2>
        <C.Content>
          <div className="inputs-container">
            <Input type="file" title="Imagem do Prato" placeholder={fileName ? fileName : "Selecione uma imagem"} imgDish={file} onChange={(e) => handleAddImage(e)}/>
            <Input type="text" title="Nome" placeholder="Ex: Sala Ceasar" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="inputs-container">
            <div className="input-wrapper">
              <label htmlFor="ingredients">Ingredientes</label>
              <div className="ingredients-wrapper">
                 <IngredientItem
                isNew
                placeholder="Novo ingrediente"
                value={newIngredient}
                onChange={(e) => {
                  setShowWarning(false)
                  setNewIngredient(e.value)
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
            <Input title="Preço" value={price} className="price" type="text" onChange={handlePrice}/>
            <div className="category-wrapper">
              <label htmlFor="categoria">Categoria</label>
              <Select placeholder={category} isDisabled/>
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="buttons">
            <button className="remove-btn" onClick={handleDeleteDish}>Excluir Prato</button>
            <button className="add-btn" onClick={() => handleUpdateDish(file)}>Atualizar prato</button>
          </div>
        </C.Content>

        {
          showLoading && <Loading/>
        }

      </C.Container>
    </Theme>
  )
}