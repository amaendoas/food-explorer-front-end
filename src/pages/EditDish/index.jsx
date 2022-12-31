import * as C from "./styles"
import { Theme } from "../../components/Theme";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input"
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";
import { api } from "../../services/api";
import { Select } from "../../components/Select";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import { Loading } from "../../components/Loading";

export function EditDish() {
  const { showLoading, setShowLoading } = useAuth(); 

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const[dish, setDish] = useState('')

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
      console.error(error.message)
    }
  }

  async function getIngredients() {
    try {
      const { data } = await api.get(`/ingredients/${params.id}`)
      let ingredients = [];
      data.forEach(ingredient => {
        ingredients.push(ingredient.name)
      });
      setIngredients(ingredients)
    } catch(error) {
      console.error(error.message)
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
          alert('prato adicionado com sucesso!')
          navigate('/')
        }).catch((error) => {
          if(error.response) {
            alert(error.response.data.message)
          } else {
            console.error(error.message)
          }
        })
      } else {
        alert('prato atualizado com sucesso!')
        navigate('/')
        return
      }   
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        console.error(error.message)
      }
    }
  }

  useEffect(() => {
    getDish()
    getIngredients()
  }, [])

  console.log(file)

  return (
    <Theme>
      <Back/>
      <C.Container>
        <h2>Editar prato</h2>
        <C.Content>
          <div className="inputs-container">
            <Input type="file" title="Imagem do Prato" placeholder={fileName ? fileName : "Selecione uma imagem"} imgDish={file} onChange={(e) => handleAddImage(e)}/>
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
          <button className="add-btn" onClick={() => handleUpdateDish(file)}>Atualizar prato</button>
        </C.Content>

        {
          showLoading && <Loading/>
        }

      </C.Container>
    </Theme>
  )
}